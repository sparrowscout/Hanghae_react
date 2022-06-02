// dictionary.js
import { db } from "../../firebase"
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

// Actions (액션 타입을 정해주는 부분)
const LOAD = 'dictionary/LOAD';
const CREATE = 'dictionary/CREATE';
const UPDATE = 'dictionary/UPDATE';
const REMOVE = 'dictionary/REMOVE';

const initialState = {
    list : [{word:"nothing really matress", completed:false , mean:"매트리스에 적혀있는 말", reference:"몰라요"},
]
}

// Action Creators

export function loadDictionary(dictionary_list) {
    return { type: LOAD, dictionary_list }
}

export function createDictionary(dictionary) {
    console.log("액션을 생성할거야")
    return { type: CREATE, dictionary };
}

export function updateDictionary(dictionary_index) {
    return {type:UPDATE, dictionary_index}
}

export function removeDictionary(dictionary_index) {
    console.log("액션을 삭제할거야")
    return { type: REMOVE, dictionary_index }
}

// export function loadWidgets() {
//   return { type: LOAD };
// }

// export function createWidget(widget) {
//   return { type: CREATE, widget };
// }

// export function updateWidget(widget) {
//   return { type: UPDATE, widget };
// }
// // 자바스크립트에서는 딕셔너리의 키와 밸류가 똑같이 생겼으면 생략가능,
// //widget : widget ==> widget

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }


//middlewares
export const loadDictionaryFB = () => {
    return async function (dispatch) {
        const dictionary_data = await getDocs(collection(db, "dictionary"));

        let dictionary_list = [];

        dictionary_data.forEach((doc) => {
            dictionary_list.push({ id:doc.id , ...doc.data() });
        });

        dispatch(loadDictionary(dictionary_list));

    }
}

export const addDictionaryFB = (dictionary) => {
return async function (dispatch) {
    console.log(dictionary)
    const docRef = await addDoc(collection(db,"dictionary"), dictionary);
 
    // const _dictionary = await getDoc(docRef);
    const dictionary_data = {id: docRef.id, ...dictionary}
    // console.log((await getDoc(docRef)).data());
    console.log(dictionary_data)

    dispatch(createDictionary(dictionary_data));
}
}

export const removeDictionaryFB = (dictionary_index) => {
    return function (dispatch) {
        console.log(dictionary_index)
        const docRef = deleteDoc(doc(db, "dictionary", dictionary_index));

    }
}
 

// Reducer
// 파라미터에 'state(어떤 값) = {} '들어가는 것 ==> 기본값을 준다
//만약에 리듀서라는 함수를 부를 때, 함수의 파라미터를 3개 받아야하는데
//인자값을 비워놓았을 때, 원래는 undefinde로 들어감.
// 오류를 방지하기 위해서 기본 값을 넣어주는 것.
// 파라미터에 값이 안들어오면 기본적으로 빈 딕셔너리일거야. 라는 뜻
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "dictionary/LOAD": {
            console.log("값을 가져올거야")
            return { list: action.dictionary_list };
        }
        case "dictionary/CREATE": {
            console.log("이제 값을 바꿀꺼야")
            const new_dictionary_list = [...state.list, action.dictionary];
            return { list: new_dictionary_list };
        }

        case "dictionary/UPDATE": {
            console.log("이제 수정할거야!")
            const new_dictionary_list = state.list.map((l, idx)=>{
                if (parseInt(action.dictionary_index) === idx){
                    console.log(action.dictionary.word, action.dictionary.mean, action.dictionary)
                } else { return l; }
            })
            return { list: new_dictionary_list };
        }

        case "dictionary/REMOVE": {
            console.log("이제 값을 삭제할거야")
            const new_dictionary_list = [...state.list.filter(list => list !== action.dictionary_index)];
            return { list: new_dictionary_list };
        }

        default: return state;
    }
}


// side effects, only as applicable
// e.g. thunks, epics, etc

//미들웨어 : 데이터를 우리가 외부에서 가져와야하는 경우라던가, 
//서버에서 데이터 가지고 와야할 때는 보통 비동기 통신임. 데이터를 안가져왔기 때문에 바로 나 action creator 디스패치 했으니까 바꿔줘. 라고 할 수 없음
//그럴 때 미들웨어라고 불리는 중간다리를 놓음. 
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }


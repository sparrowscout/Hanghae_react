// review.js

// Actions 액션 타입을 정해주는 애들
// const LOAD   = 'my-app/widgets/LOAD';
// 데이터를 어디서 가져오는지 , 근데 서버에서 가져오는거아니니까 삭제
// const CREATE = 'review/CREATE';
const UPDATE = 'review/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

// Action Creators
// export function createBucket(bucket){
//     return{type:CREATE, bucket}
// }

const initialState = {
    list: [
        "월",
        "화",
        "수",
        "목",
        "금",
        "토",
        "일"
      ]
}

// export function loadWidgets() {
//   return { type: LOAD };
// }

// export function createWidget(widget) {
//   return { type: CREATE, widget };
// }
//키와 밸류가 똑같이 생겼으면 생략 가능 (widget:widget => width)

export function updateReview(star) {
  return { type: UPDATE, star };
}

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }

// Reducer ={} => 기본 값을 준다
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "review/UPDATE" : {
            
        }
      // do reducer stuff
      default: return state;
    }
  }

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }
//미들웨어 : 중간다리
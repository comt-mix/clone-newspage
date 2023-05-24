import ListView from "./ListView.vue";

export default function createListView(name) {
  return {
    name,//newView, jobview, askview 등의 이름
    created() {
      //데이터 호출은 여기서 다 이루어짐
  
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
} 

//new, ask, jobs의 행동이 같았기 때문에 해당 로직을 재사용하기 위해 hoc로 만듦
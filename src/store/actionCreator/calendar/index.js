import { string } from "_postcss-selector-parser@6.0.2@postcss-selector-parser";
import { stringify } from "querystring";

export const getDay=payload=>({
        type:"GET_DAY",
        payload,
})
export const getCategory=payload=>({
    type:"GET_CATEGORY",
    payload,
})
export const getShowList=payload=>({
    type:"GET_SHOWLIST",
    payload,
})
let category_id=0;
export default{
    getDay(year=2019,month=12){
        if(month>12){
            year+=1;
            month=1;
        }else if(month<=0){
            year-=1;
            month=12;
        }
        return(dispatch)=>{
            this.$axios.get("/m/Search/getCalendar",{
                params:{
                    year,
                    month,
                    city:0,
                    category:0,
                    version:"6.0.8",
                    referer:2
                }
            }).then(({data})=>{
                const {calendar}=data.data;
                dispatch(getDay({calendar,year,month}))
            })
        }
    },
    getCategory(){
        return(dispatch)=>{
            this.$axios.get("/m/Search/getShowCategory",{
                params:{
                    version:"6.0.8",
                    referer:2
                }
            }).then(({data})=>{
                const{show_category_list}=data.data;
                dispatch(getCategory({show_category_list}))
            })
        }
    },
    getShowList(category=0,start_time,flag_nav,flag_day){
        console.log(2222,category,start_time)
        if(flag_nav===1){
            category_id = category
        }
        if(flag_day===1){
            category = category_id
        }
        return(dispatch)=>{
            this.$axios.get("/n/Show/Search/getShowList",{
                params:{
                    category,
                    city_id:0,
                    start_time,
                    page:1,
                    version:"6.0.8",
                    referer:2
                }
            }).then(({data})=>{
                const {list}=data.data;
                console.log(66,list);
                dispatch(getShowList({list,category,start_time}));
            })
        }
    }
}
import { createContext, useState, useEffect } from "react";


export const SchoolContext = createContext();



export const SchoolProvider = ({children}) => {


const [school,setSchool] = useState(()=>{


const savedSchool = localStorage.getItem("school");


return savedSchool
? JSON.parse(savedSchool)
:
{
 schoolName:"",
 address:"",
 phone:"",
 email:"",
 principal:"",
 logo:""
};


});




useEffect(()=>{


localStorage.setItem(
"school",
JSON.stringify(school)
);


},[school]);




return(

<SchoolContext.Provider
value={{
school,
setSchool
}}
>

{children}

</SchoolContext.Provider>

);


};
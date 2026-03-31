import { createBrowserRouter } from "react-router";
import Login from "../components/Login";
import Registration from "../components/Registration";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../components/ErrorPage";
import MyProfile from "../components/MyProfile";
import Services from "../components/Services";
import Slider from "../components/Slider";
import WinterCareServices from "../components/WinterCareServices";
import WinterCareTips from "../components/WinterCareTips";
import MeetExpertVets from "../components/MeetExpertVets";
import Tips from "../components/Tips";
import Vets from "../components/Vets";
import BookNow from "../components/BookNow";
import AuthLayout from "../components/AuthLayout";
import PrivateRoute from "../components/PrivateRoute";
import Loading from "../components/Loading";

const router=createBrowserRouter(

    [

        {
            path:"/",
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    index: true,
                    element: (
                              <>
                                <Slider />
                                <WinterCareServices />
                                <WinterCareTips></WinterCareTips>
                                <MeetExpertVets></MeetExpertVets>
                              </>
                             ),
                    

                },


                {
                  path:"/services",
                  loader: async () => {
                  const res = await fetch('/winterService.json');
                    return res.json();
                  },
                  hydrateFallbackElement:<Loading></Loading>,
                  element: <Services></Services>

                },


                {
                    path:"/tips",
                    loader: async () => {
                    const res = await fetch('/winterTips.json');
                    return res.json();
                    },
                    element:<Tips></Tips>

                },


                {
                    path:"/expertVets",
                    loader: async () => {
                    const res = await fetch('/vets.json');
                    return res.json();
                    },
                    element:<Vets></Vets>
                },


                {
                  path:"/myProfile",
                  element: (<PrivateRoute>
                         <MyProfile></MyProfile>
                  </PrivateRoute>)

                },

                {
            path:"/*",
            element:<ErrorPage></ErrorPage>
        }


                

                
                

            ],
            
        },

        {

            path:"/auth",
            element: <AuthLayout></AuthLayout>,
            children:[

                {
                    path:"login",
                    element:<Login></Login>,
                },

                  {
                    path:"registration",
                    element:<Registration></Registration>,
                },
            ]


        },


                

                // {
                //     path:"/bookNow",
                //     element:<BookNow></BookNow>

                // },

                {
                    path:"/bookNow",
                    element:(<PrivateRoute>
                                   <BookNow></BookNow>
                            </PrivateRoute>),
                }

                

                

                
        
        
        
        // {
        //     path:"/registration",
        //     element: <Registration></Registration>
        // },

        // {
        //     path:"/login",
        //     element: <Login></Login>
        // },

        

        
        
    ]
);

export default router;
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Button } from "@material-ui/core";
import { Person } from "../../typedefs";
import style from "../../styles/PersonDetail.module.css";
import Router from "next/router";
import { LOAD_USERS_LOADING } from "../../store/types";

function PersonPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: LOAD_USERS_LOADING});
    }, []);   
    const router = useRouter();
    const { id } = router.query;
    const people = useSelector((state: RootState) => state.people);
    const person: Person = people?.people?.filter((p: Person) => String(p.id) === id)[0];    
    
    return (
        <div className={style.container}>
             <h2 className={style.title}>{person?.name}</h2>
             <div className={style.details}>
                 <div className={style.datapoint}>Age: {person?.age}</div>
                 <div className={style.datapoint}>Sex: {person?.sex}</div>
                 <h3 className={style.tag}>Available address:</h3>
                 {person?.addresses?.map((a, i) => (
                 <div className={style.address} key={i}>
                     <div>{a.locality}</div>
                     <div>{a.city}</div>
                     <div>{a.state}</div>
                     <div>{a.pincode}</div>
                     <div>{a.country}</div>
                 </div>
                 ))}
             </div>
            <Button
                onClick={() => Router.back()}
                color="secondary"
                variant="outlined"
            >
                {"< Go Back"}
            </Button>
        </div>
    );
} 


export default PersonPage;
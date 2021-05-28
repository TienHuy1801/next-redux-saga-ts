import Head from 'next/head'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import type { RootState } from '../store/store'
import Table from "../components/Table";
import { LOAD_USERS_LOADING } from '../store/types';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: LOAD_USERS_LOADING});
  }, []);
  const people = useSelector((state: RootState) => state.people.people);  

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className={styles.title}>People Directory</h2>
      <div style={{width: "100%"}}>
        <Table rows={people}/>
      </div>
    </div>
  )
}

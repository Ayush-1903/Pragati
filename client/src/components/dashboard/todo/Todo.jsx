import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Lists from './components/Lists';
import PageTitle from './components/Title';
import styles from './styles/modules/app.module.scss';

const Todo = () => {
  return (
    <>
      <div className='todo'>
        <PageTitle data-aos="fade-right" data-aos-duration="500" data-aos-delay="100">Todo List</PageTitle>
        <div className={styles.app__wrapper} data-aos="fade-up"data-aos-duration="500" data-aos-delay="100">
          <Header />
          <Lists />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1rem',
          },
        }}
      />  
    </>
  )
}

export default Todo
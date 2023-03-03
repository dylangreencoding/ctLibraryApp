import React from 'react'
import { useDispatch, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseTitle, chooseAuthor, chooseGenre, chooseIsbn } from '../redux/slices/rootslice';
import { server_calls } from '../api';
import { useGetData } from '../custom-hooks';


interface Props {
  id: string;
  deleteData(id: string): any;
  render: string;
  setRender: Function;
}


export const Form = (props: Props) => {

  const dispatch = useDispatch();
  const store = useStore();
  
  const { register, handleSubmit } = useForm({ })

  function onSubmit (data: any, event: any) {
    console.log(props.id)
    if (props.id!) {
      server_calls.update(props.id!, data);
      setTimeout( () => {props.setRender('')}, 1000);
      event.target.reset();
    } else {
      dispatch(chooseTitle(data.title));
      dispatch(chooseAuthor(data.author));
      dispatch(chooseGenre(data.genre));
      dispatch(chooseIsbn(data.isbn));
      server_calls.create(store.getState());
      setTimeout(() => {props.setRender('')}, 1000);
    }
  }

  return (
    <div>
      <form onSubmit = {handleSubmit(onSubmit)} className='form'>
        <div>
          <label>
            <input type="text" placeholder='Enter Title' {...register('title')} name='title' />
          </label>
        </div>
        <div>
          <label>
            <input type="text" placeholder='Enter Author' {...register('author')} name='author'/>
          </label>
        </div>
        <div>
          <label>
            <input type="text" placeholder='Enter Genre' {...register('genre')} name='genre'/>
          </label>
        </div>
        <div>
          <label>
            <input type="text" placeholder='Enter ISBN' {...register('isbn')} name='isbn'/>
          </label>
        </div>
  
        <div>
          {props.id ? <button type='submit' className='btn-off'>CREATE</button> : <button type='submit'>CREATE</button>}
        </div>
        <div> 
          {props.id ? <button type='submit'>UPDATE {props.id}?</button> : <button type='submit' className='btn-off'>UPDATE</button>}
        </div>

        <div>
          <button type='button' className={props.id ? `` : `btn-off`} onClick={() => props.deleteData(props.id)}>DELETE {props.id}</button>
        </div>
        <div>
          <p>CTRL + Click to unselect</p>
        </div>
      </form>
    </div>
  )
}

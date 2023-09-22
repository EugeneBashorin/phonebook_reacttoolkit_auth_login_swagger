import React from "react";
import { useDispatch } from 'react-redux';
import { setValueFilter } from 'redux/contacts/userFilterSlice';
import { LabelEl, InputEl, InputElCheck, LabelCheck, FilterSection } from './FilterComponent.styled';

export const FilterComponent = ({onClose}) => {
    const dispatch = useDispatch();
    const showFilteredList = (event) =>{
      switch(event.target.name){
        case "filter":
          const filterValue = event.target.value;
          dispatch(setValueFilter(filterValue));
          break;
        default:
          return;    
      }
    }
    return( 
      <FilterSection>     
          <LabelEl>
            Find contacts by name
            <InputEl
              type="text"
              name="filter"
              onChange={showFilteredList}
              onBlur={()=>onClose()}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
        </LabelEl>
      </FilterSection>  
    )
}
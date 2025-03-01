import ItemList from "../handson/q1/itemList";
import CounterUseState from "../handson/q2/CounterUseState";
import Parent from '../handson/q3/Parent'
import Item from '../handson/q5/Item'
import FormValidation from '../handson/q6/FormValidation'
import RoleBasedComponent from '../handson/q7/RoleBasedComponent'
import AuthButton from '../handson/q8/AuthButton'
import SearchBar from '../handson/q9/SearchBar'
import ToggleDiv from '../handson/q10/ToggleDiv'
import ParentComponent from '../handson/q30/ParentComponent'
import Prac from '../handson/DOM/Prac'
import ParentClass from '../handson/ClassBased/ParentClass'
import ErrorBoundary from '../handson/ClassBased/ErrorBoundary'
import HocConcept from "../handson/ClassBased/HocConcept";
import './App.css'

const EnhancedParent = HocConcept(ParentClass);

function App() {
  return (
    <>
      {/* <ItemList/> */}
      {/* <CounterUseState/> */}
      {/* <Parent/> */}
      {/* <Item/> */}
      {/* <FormValidation/> */}
      {/* <RoleBasedComponent/> */}
      {/* <AuthButton/> */}
      {/* <SearchBar/> */}
      {/* <ToggleDiv/> */}
      {/* <ParentComponent/> */}
      {/* <Prac/> */}
      {/* <ErrorBoundary>
        <ParentClass hero = "jok"/>
      </ErrorBoundary> */}
      <EnhancedParent text="welcome"/>
    </>
  )
}

export default App


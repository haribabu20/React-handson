import ItemList from "../handson/React_Handson/q1/itemList";
import CounterUseState from "../handson/React_Handson/q2/CounterUseState";
import Parent from '../handson/React_Handson/q3/Parent'
import Item from '../handson/React_Handson/q5/Item'
import FormValidation from '../handson/React_Handson/q6/FormValidation'
import RoleBasedComponent from '../handson/React_Handson/q7/RoleBasedComponent'
import AuthButton from '../handson/React_Handson/q8/AuthButton'
import SearchBar from '../handson/React_Handson/q9/SearchBar'
import ToggleDiv from '../handson/React_Handson/q10/ToggleDiv'
import ParentComponent from '../handson/React_Handson/q30/ParentComponent'
import Prac from '../handson/DOM/Prac'
import ParentClass from '../handson/ClassBased/ParentClass'
import ErrorBoundary from '../handson/ClassBased/ErrorBoundary'
import HocConcept from "../handson/ClassBased/HocConcept";
import './App.css'
import RoutesDetail from '../handson/Routes/RoutesDetail'
import MainPage from '../handson/Routes/MainPage'

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
      {/* <EnhancedParent text="welcome"/> */}
      <MainPage/>
    </>
  )
}

export default App



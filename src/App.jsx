import MyRoutes from "./MyRoutes"
import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { itemReducer } from "./redux/itemReducer"
import { cartReducer } from "./redux/cartReducer"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"


function App() {
  
let rootReducer=combineReducers({
  itemStore: itemReducer,
  cartStore: cartReducer
})
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const myStore = createStore(persistedReducer)
const myPersistor = persistStore(myStore)
  return (
    <>
    <Provider store={myStore}>
      <PersistGate   persistor={myPersistor}>
        <MyRoutes />
      </PersistGate>

    </Provider>
        

        
    </>
  )
}

export default App

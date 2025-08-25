import { configureStore } from "@reduxjs/toolkit";
import quotereducer from './quoteSlice'


const proverbgiver = configureStore({
    reducer:
        { quote1: quotereducer }

})
export default proverbgiver

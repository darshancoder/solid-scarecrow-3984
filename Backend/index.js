const express = require("express")
require("dotenv").config()
const {connect } = require("./Config/db")
const { Beauty } = require("./Routers/Beauty.route")
const { Dairy } = require("./Routers/Dairy.route")
const { Electronics } = require("./Routers/Electronics.route")
const { men } = require("./Routers/Fashion.route")
const { Fruits } = require("./Routers/Fruits.route")
const { HomeKitchen } = require("./Routers/Home&Kitchen.route")
const { AutoCare } = require("./Routers/HomeImprovement.route")
const { apples_pears } = require("./Routers/PremiumFruits.route")
const { SportsToys } = require("./Routers/SportsToys")
const { Staples } = require("./Routers/Staples.route")


const app = express()
app.use(express.json())

app.get("/",(req,res) => {
    res.send("Welcome Home to Frontend")
})

app.use("/fruits", Fruits)
app.use("/dairy", Dairy)
app.use("/staples", Staples)
app.use("/apples_pears", apples_pears)
app.use("/HomeAppliance", HomeKitchen)
app.use("/men", men)
app.use("/mobiles", Electronics)
app.use("/makeup", Beauty)
app.use("/autocare", AutoCare)
app.use("/toysgames", SportsToys)




app.listen(process.env.PORT, async() => {
    try{
        await connect()
        console.log("DB is Connected to Sucessssfully....");

    }catch(e){
        console.log("DB is connected to failed!!!!!")
    }
    console.log(`http://localhost:${process.env.PORT}`);
})
const http=require ('http');//קישור לספריית פרוטוקול עבודה באינטרנט
//קישור לאפליקציה שכתבנו בקובץ החיצוני 
const app=require('./app');
const port=3000;
//יצירת אובייקט מסוג שרת אינטרנט
const server = http.createServer(app)
//הפעלת אובייקט השרת כך שיאזין לבקשות בכתובת הפואט שהגדרנו לו 
server.listen(port , ()=>{console.log("server started")});

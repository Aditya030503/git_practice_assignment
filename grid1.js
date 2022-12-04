<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
   
    .grid{
        display: grid;
        /* width: 0%; */
        grid-template-columns: repeat(4,1fr);
        /* grid-template-rows: repeat(4,100px); */
        grid-auto-rows: 50px;
        /* gap: 20px; */
        row-gap: 10px;
        column-gap: 20px;
        grid-template-areas: 
        "nav nav nav nav"
        "red red red green"
        "red red red green"
        "red red red pink"
        "red red red pink"
        "red red red grey"
        "red red red grey";
    }
    .grid>div:nth-child(1){
        background-color: yellow;
        grid-area: nav;
        align-items: center;
        padding: 0px 20px 0px 20px ;
        align-items: center;
        display: flex;
        
    }.grid>div:nth-child(2){
        background-color: red;
        grid-area: red;
        padding: 7px 10px 0px ;
    }.grid>div:nth-child(3){
        background-color: rgb(52, 196, 16);
        grid-area: green;
         padding: 7px 10px 0px ;
    }.grid>div:nth-child(4){
        background-color: rgb(52, 196, 16);
        grid-area: pink;
         padding: 7px 10px 0px ;
    }.grid>div:nth-child(5){
        background-color: rgb(52, 196, 16);
        grid-area: grey;
         padding: 7px 10px 0px ;
    }
</style>
<body>
   
    <div class="grid">
       
     <div><h1 >Navigation</h1></div>
           
        <div>LEFT BOX</div>
        <div>RIGHT BOX 1</div>
        <div>RIGHT BOX 2</div>
        <div>RIGHT BOX 3</div>
        
    </div>
</body>
</html>

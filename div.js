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
        width: 70%;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: repeat(2,250px);
        
        gap: 10px;
        margin: auto;
        margin-top: 20px;
    }
    .grid>div {
         font-size: 30px;
         color: white;
         /* text-align: center; */
        border-radius: 10px;
         
    }
    .grid h1 {
        margin-left: 20px;
    }
    .grid>div:nth-child(1){
       background-color: black;
       /* grid-area: red; */
       grid-column-start: 1;
       grid-column-end: 3; 
    }
    .grid>div:nth-child(2){
       background-color: black; 
       /* grid-area: blue; */
       grid-row-start: 1;
       grid-row-end: 3;
       grid-column-start: 3;
       grid-column-end: 4;
    }
    .grid>div:nth-child(3){
       background-color: black; 
       /* grid-area: green; */
    }
    .grid>div:nth-child(4){
       background-color: black; 
       /* grid-area: black; */
    }
    .grid>div:nth-child(5){
       background-color: black; 
       /* grid-area: gry; */
       grid-row-start: 1;
       grid-row-end: 4;
       grid-column-start: 4;
       grid-column-end: 6;
    }
  </style>
<body>
    <div class="grid">
        <div><h1>A</h1></div>
        <div><h1>B</h1></div>
        <div><h1>C</h1></div>
        <div><h1>D</h1></div>
        <div><h1>E</h1></div>
    </div>
</body>
</html>

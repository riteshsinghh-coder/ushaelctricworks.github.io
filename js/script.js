let Image=Array.from(document.getElementById('image'));

let photo = [
  {fileName: "Grinder Machine", filePath: "tumblr\assets\img\grinder4.jpg" },
  {fileName: , filePath: "tumblr\assets\img\grinder5.jpg"},
  {fileName: , filePath: ", },
  {fileName: "", filePath: "",},
  {fileName: "Pneumatic Drill Machine", filePath:  },
  {fileName: "", filePath: "tumblr\assets\img\bosch-hammer-drill-500x500.jpg" },
  {fileName: "", filePath: "tumblr\assets\img\hammer-drill-500x500.jpg" },
  {fileName: "", filePath: },
  {fileName: "", filePath: "tumblr\"},
  {fileName: "", filePath: "tumblr\"},
  {fileName: "", filePath: "tumblr\"},
  {fileName: "", filePath: "tumblr"},
  {fileName: "", filePath: "tumblr\"},
  {fileName: "", filePath: "tumblr\"},
  {fileName: "", filePath: "tumblr\"},
  {fileName: "", filePath: "tumblr\"},
  {fileName: "", filePath: "tumblr\"},
  {fileName: "", filePath: "tumblr\"},
  {fileName: "", filePath: "tumblr\"},
  {fileName: "", filePath: "tumblr\"},
  {fileName: "", filePath: "tumblr\"},

]
Image.forEach((element,i)=>{
  console.log(element,i);
  element.getElementsByTagName('img')[0].src=photo[i].filePath;
  element.getElementsByTagName('h4')[0].innerText=photo[i].fileName;
})
//定义食品的类型
interface Food{
      "id":number,
      "name":string,
      "price":number,
      "status":number, 
      "type":string
}
export const foods : Array<Food> = [
  {
      "id":1,
      "name":"food1",
      "price":10,
      "status":1, 
      "type":"hot"
  },
  {
      "id":2,
      "name":"food2特价",
      "price":10,
      "status":1, 
      "type":"hot"
  },
  {
      "id":3,
      "name":"food3",
      "price":10,
      "status":1, 
      "type":"hot"
  },
  {
      "id":4,
      "name":"food4",
      "price":10,
      "status":1, 
      "type":"hot"
  },
  {
      "id":5,
      "name":"food5特价",
      "price":10,
      "status":1, 
      "type":"hot"
  },
  {
      "id":6,
      "name":"food6",
      "price":10,
      "status":1, 
      "type":"hot"
  }
]

export const bookList=[
  {
    id:1,
    name:"特价:",
    price:8.88,
    path:"/assets/img/highPrice01.jpg"
  },
  {
    id:2,
    name:"特价:",
    price:8.88,
    path:"/assets/img/highPrice02.jpg"
  },
  {
    id:3,
    name:"特价:",
    price:8.88,
    path:"/assets/img/highPrice03.jpg"
  },
  {
    id:4,
    name:"特价:",
    price:8.88,
    path:"/assets/img/goobook02.jpg"
  },
  {
    id:5,
    name:"特价:",
    price:8.88,
    path:"/assets/img/goobook03.jpg"
  },
  {
    id:6,
    name:"特价:",
    price:8.88,
    path:"/assets/img/goobook04.jpg"
  },
]
export const goodBookList=[
    {
        id:1,
        title:"马克以上",
        writer:"作者",
        writername:"[中华出版社]",
        copyright:"出版社",
        copyrightname:"高等教育出版社",
        nowprice:5.7,
        preprice:22.9,
        buy:"加购",
        path:"/assets/img/goobook.jpg"
      },
      {
        id:2,
        title:"马克以上",
        writer:"作者",
        writername:"[中华出版社]",
        copyright:"出版社",
        copyrightname:"高等教育出版社",
        nowprice:5.7,
        preprice:22.9,
        buy:"加购",
        path:"/assets/img/goobook03.jpg"
      },
      {
        id:3,
        title:"马克以上",
        writer:"作者",
        writername:"[中华出版社]",
        copyright:"出版社",
        copyrightname:"高等教育出版社",
        nowprice:5.7,
        preprice:22.9,
        buy:"加购",
        path:"/assets/img/goobook04.jpg"
      },
      {
        id:4,
        title:"马克以上",
        writer:"作者",
        writername:"[中华出版社]",
        copyright:"出版社",
        copyrightname:"高等教育出版社",
        nowprice:5.7,
        preprice:22.9,
        buy:"加购",
        path:"/assets/img/goobook05.jpg"
      },
      {
        id:5,
        title:"马克以上",
        writer:"作者",
        writername:"[中华出版社]",
        copyright:"出版社",
        copyrightname:"高等教育出版社",
        nowprice:5.7,
        preprice:22.9,
        buy:"加购",
        path:"/assets/img/highPrice03.jpg"
      },
]
export const lowPrice=[
  {
    "id":1,
    title:"马克以上",
    writer:"作者",
    writername:"[中华出版社]",
    copyright:"出版社",
    copyrightname:"高等教育出版社",
    nowprice:"￥8.8",
    preprice:"原价:22.9",
    buy:"加购",
    path:"/assets/img/highPrice01.jpg"
  },
  {
    "id":2,
    title:"马克以上",
    writer:"作者",
    writername:"[中华出版社]",
    copyright:"出版社",
    copyrightname:"高等教育出版社",
    nowprice:"￥8.8",
    preprice:"原价:22.9",
    buy:"加购",
    path:"/assets/img/highPrice02.jpg"
  },
  {
    "id":3,
    title:"马克以上",
    writer:"作者",
    writername:"[中华出版社]",
    copyright:"出版社",
    copyrightname:"高等教育出版社",
    nowprice:"￥8.8",
    preprice:"原价:22.9",
    buy:"加购",
    path:"/assets/img/highPrice03.jpg"
  },
  {
    "id":4,
    title:"马克以上",
    writer:"作者",
    writername:"[中华出版社]",
    copyright:"出版社",
    copyrightname:"高等教育出版社",
    nowprice:"￥8.8",
    preprice:"原价:22.9",
    buy:"加购",
    path:"/assets/img/goobook02.jpg"
  },
  {
    "id":5,
    title:"马克以上",
    writer:"作者",
    writername:"[中华出版社]",
    copyright:"出版社",
    copyrightname:"高等教育出版社",
    nowprice:"￥8.8",
    preprice:"原价:22.9",
    buy:"加购",
    path:"/assets/img/goobook03.jpg"
  },
]
/*
db.lowPrice.insertMany([
  {
    "id":1,
    title:"马克以上",
    writer:"作者",
    writername:"[中华出版社]",
    copyright:"出版社",
    copyrightname:"高等教育出版社",
    nowprice:"￥8.8",
    preprice:"原价:22.9",
    buy:"加购",
    path:"/assets/img/highPrice01.jpg"
  },
  {
    "id":2,
    title:"马克以上",
    writer:"作者",
    writername:"[中华出版社]",
    copyright:"出版社",
    copyrightname:"高等教育出版社",
    nowprice:"￥8.8",
    preprice:"原价:22.9",
    buy:"加购",
    path:"/assets/img/highPrice02.jpg"
  },
  {
    "id":3,
    title:"马克以上",
    writer:"作者",
    writername:"[中华出版社]",
    copyright:"出版社",
    copyrightname:"高等教育出版社",
    nowprice:"￥8.8",
    preprice:"原价:22.9",
    buy:"加购",
    path:"/assets/img/highPrice03.jpg"
  },
  {
    "id":4,
    title:"马克以上",
    writer:"作者",
    writername:"[中华出版社]",
    copyright:"出版社",
    copyrightname:"高等教育出版社",
    nowprice:"￥8.8",
    preprice:"原价:22.9",
    buy:"加购",
    path:"/assets/img/goobook02.jpg"
  },
  {
    "id":5,
    title:"马克以上",
    writer:"作者",
    writername:"[中华出版社]",
    copyright:"出版社",
    copyrightname:"高等教育出版社",
    nowprice:"￥8.8",
    preprice:"原价:22.9",
    buy:"加购",
    path:"/assets/img/goobook03.jpg"
  },
])
*/
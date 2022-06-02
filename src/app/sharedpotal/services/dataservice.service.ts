import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  DummyData:any = [
    // {
    //   _id : 1,
    //   Name:'Men Watch',
    //   Image1:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ubuy.com.tr%2Fen%2Fproduct%2FQGPDN34-ultra-thin-watch-women-rose-gold-watches-for-women-watches-for-women-on-sale-clearance-womens-watche&psig=AOvVaw3sz9vPX_cxlCoRg7Sa-Gbv&ust=1654152808081000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCI3tXVi_gCFQAAAAAdAAAAABAJ',
    //   Image2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdc-7qYpB-DZBZbK2hIegQ8pBcqsLcv30aA&usqp=CAU',
    //   Description:'This is best watch',
    //   qty : '9 Available',
    // },
    {
      _id : 2,
      Name:'Women Watches',
      Image1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHS3ZIOlymFq-b7N0M_t3GPUCqhkGB131knA&usqp=CAU',
      Image2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRC_MJ4eCYci6Q6gQ41NQ0n0g6ZQ-KHp6zA&usqp=CAU',
      Description:'Beautiful Watches for Girls',
      qty : '9 Available',
    },
    {
      _id : 2,
      Name:'Women Watches',
      Image1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRC_MJ4eCYci6Q6gQ41NQ0n0g6ZQ-KHp6zA&usqp=CAU',
      Image2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRC_MJ4eCYci6Q6gQ41NQ0n0g6ZQ-KHp6zA&usqp=CAU',
      Description:'Beautiful Watches for Girls On 20% off',
      qty : '1 Available',
    },
    {
      _id : 3,
      Name:'Shirts',
      Image1:'https://www.kayazar.com/images/product_gallery/1649808244_Deal-009-website.webp',
      Image2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwFkV7pGbeJx5k5PJyXjgl1ZRS9fbo1J7fQ&usqp=CAU',
      Description:'20% flat off',
      qty : '9 Available',
    },
    {
      _id : 4,
      Name:'Summer P Caps',
      Image1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84jVLvbVni964Jl91Uo-El3rvRAzxZXcPfw&usqp=CAU',
      Image2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84jVLvbVni964Jl91Uo-El3rvRAzxZXcPfw&usqp=CAU',
      
      Description:'Caps',
      qty : 0
    },
    {
      _id : 4,
      Name:'Summer P Caps',
      Image1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5yCug19wQfw2m64pre7fG9i6aU7sme9JgIg&usqp=CAU',
      Image2:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84jVLvbVni964Jl91Uo-El3rvRAzxZXcPfw&usqp=CAU',
      
      Description:'Caps',
      qty : '9 Available',
    },
    {
      _id : 5,
      Name:'Ambrella',
      Image1:'https://media.istockphoto.com/photos/open-umbrella-picture-id182422175?b=1&k=20&m=182422175&s=170667a&w=0&h=KtNajRl1Oe3cOThPPlf-YjyASbQrPoVAJ6tWQbgq99c=',
      Image2:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt2616880%2F&psig=AOvVaw0TT7w7Yp23fg84V1DOX54Q&ust=1654162566187000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjI3vj5i_gCFQAAAAAdAAAAABAU',
      Description:'Sunlight Resister',
      qty : 0 
    },
  ]
  constructor() { }
  GetData(){
    return this.DummyData;
  }
}
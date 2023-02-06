import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <!-- dashboard --> */}
        <div class="dashboard">
          <div class="text">
            <h1>Find Every thing you need!</h1>
            <p>
              EDA is a fully functioning ecommerce site, with all the neccessary
              functionality like signin functionality , payment
              functionality(using stripe servers) , and keeping track of who
              ordered what (by keeping a live database on firebase's server)
            </p>
            <a href="#" class="button"></a>
          </div>
          <div class="image">
            <img
              src="https://cdn.dribbble.com/users/1272091/screenshots/14908225/media/94ef4a9764c63951071ab043a8b68055.jpg?compress=1&resize=1000x750&vertical=top"
              alt="home img"
            />
          </div>
        </div>
        <div className="row_head">
          <br />
          <h1>electronics -</h1>
        </div>
        <div className="home__row">
          <Product
            id="735897234857"
            title="Sony PS5 DualSense Wireless Controller – Grey Camouflage "
            price={4990}
            image="https://i5.walmartimages.com/asr/c341aa1f-70eb-4498-bca0-5e6e07872b0a.4edbeed44b22a23647317a2d92c52ca0.jpeg"
            rating={5}
          />
          <Product
            id=""
            title="LG 55 Class UP7050 Series LED 4K UHD Smart webOS TV - 55UP7050PUJ"
            price={14599}
            image="https://i5.walmartimages.com/asr/24abce54-1aff-4d6b-b306-c8f06f8ab04a.228e09ac0282601b29556e25dbd3ddf0.jpeg"
            rating={4}
          />
          <Product
            id="735897234857"
            title="ASUS ROG Zephyrus M16 3050 Ti - 16 GB RAM - 512 GB SSD NVMe - 16 "
            price={93990}
            image="https://i5.walmartimages.com/asr/5e25f01c-56b7-4cc7-a01e-e11918c29d2a.6f09c0ce133fddf54daf2a9670b6a672.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            rating={5}
          />
          <Product
            id="519198195912619"
            title="USED: Google Pixel 6 Pro, Fully Unlocked | 128GB, Black"
            price={14599}
            image="https://5.imimg.com/data5/IOS/Default/2022/10/IX/WZ/WC/43819962/product-jpeg-500x500.png"
            rating={4}
          />
          <Product
            id="735897234857"
            title="SAMSUNG Galaxy Watch 4 - 40mm BT - Pink Gold - SM-R860NZDAXAA"
            price={7990}
            image="https://i5.walmartimages.com/asr/b0831758-8d31-4dbd-bc29-90ff6694292d.543c455362168b7273806c2f0d1af9ff.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            rating={5}
          />
          <Product
            id=""
            title="2022 Apple 10.9-inch iPad Air Wi-Fi 256GB - Space Gray (5th Generation)"
            price={64599}
            image="https://i5.walmartimages.com/asr/58b1df79-47e0-41fb-bc7b-73a486b42165.eeb9b216e7850b21810cb0ce3ab657f4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            rating={4}
          />
          <Product
            id="1234312"
            title="Sony PULSE 3D Gaming Headset"
            price={8999.99}
            image="https://i5.walmartimages.com/asr/ebe1bcf9-1ffd-4793-b3b8-7a94a54e64a4.7044a2a1d2c31de80631e73627fb1424.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            rating={5}
          />
        </div>
        <div className="row_head">
          <br />
          <h1>Fashion -</h1>
        </div>
        <div className="home__row">
          <Product
            id="98213741"
            title="Time and Tru Women's Super Soft Midweight Stripe Sweater"
            price={599.99}
            image="https://i5.walmartimages.com/asr/feec634f-4a6d-42c1-aa3f-6849698d5bd7.09d3abcb1344c4d33b71961c2329fb5d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            rating={4}
          />
          <Product
            id="OZWEEGO"
            title="Free Assembly Men’s Coverstitch Sweatshirt"
            price={899.99}
            image="https://i5.walmartimages.com/asr/82805afb-1842-4fda-ad2f-4e89a7b35d0b.3e57a64c9196720c301626176f9d0165.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            rating={3}
          />
          <Product
            id="1234312"
            title="Sofia Active by Sofia Vergara Women’s High Waist Studio Joggers, 27 Inseam"
            price={1999.99}
            image="https://i5.walmartimages.com/asr/e45620bf-9dff-4983-b080-50d431cecb1e.6827a1a93f73812e819319117cf76a9b.jpeg"
            rating={5}
          />
          <Product
            id="98213741"
            title="cold overall"
            price={1599.99}
            image="https://www.pngitem.com/pimgs/m/136-1369939_transparent-blue-aesthetic-png-blue-aesthetic-clothes-transparent.png"
            rating={4}
          />
          <Product
            id="19515195"
            title="JENN ARDOR Women's Casual Dressy Pumps Closed Round Toe Chunky Square Low Heels"
            price={2999.99}
            image="https://i5.walmartimages.com/asr/46cbdf94-a9bc-4361-9b36-d9deda10ebac.f3ee3cf049d20490533836b5456c7647.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            rating={3}
          />
        </div>
        <div className="row_head">
          <br />
          <h1>Kitchen -</h1>
        </div>
        <div className="home__row">
          <Product
            id=""
            title="Beautiful 2 Slice Touchscreen Toaster, Black Sesame by Drew Barrymore"
            price={2999.99}
            image="https://i5.walmartimages.com/dfw/4ff9c6c9-c975/k2-_6f73e2cc-d5f1-4aed-8b18-1b95d8b12fbc.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
            rating={3}
          />
          <Product
            id=""
            title="Mainstays Glazed Stoneware Dinnerware Set, 12-Pieces"
            price={903.99}
            image="https://i5.walmartimages.com/dfw/4ff9c6c9-9228/k2-_4a521834-5e0e-4695-ad09-238828b33fde.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
            rating={4}
          />
          <Product
            id="519198195912619"
            title="LivingKit Farberware Kitchen Knife Cutlery Set-14 Piece Steak Knives set"
            price={1599}
            image="https://i5.walmartimages.com/dfw/4ff9c6c9-a92b/k2-_48bd6d36-b976-4372-a712-b4abbc6d8e67.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
            rating={4}
          />
          <Product
            id="735897234857"
            title="SANWOOD Wood Spatula Paintless Wooden Kitchen Non-stick Pot Frying Spatula Cooking Tool"
            price={390}
            image="https://i5.walmartimages.com/dfw/4ff9c6c9-9595/k2-_a1c41232-f550-4bd4-bfe4-2f99e7ef2f86.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
            rating={5}
          />
          <Product
            id="562625"
            title="Ninja™ Foodi™ NeverStick™ Essential 8-inch Fry Pan"
            price={599}
            image="https://i5.walmartimages.com/dfw/4ff9c6c9-a469/k2-_c1f4c59c-9811-4e38-85e2-3de384ede2b4.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
            rating={4}
          />
        </div>{" "}
        <div className="row_head">
          <br />
          <h1>Sports -</h1>
        </div>
        <div className="home__row">
          <Product
            id="5465465"
            title="Franklin SZ4 Soccer Balls"
            price={400}
            image="https://i5.walmartimages.com/dfw/4ff9c6c9-c4a9/k2-_d03b55cd-e4eb-4f25-b797-2177606b15a2.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
            rating={3}
          />
          <Product
            id="447546544"
            title="Decathlon Artengo TR100, 27' Tennis Racket, Black, 9.3 oz"
            price={1000.99}
            image="https://i5.walmartimages.com/dfw/4ff9c6c9-ef84/k2-_855aa9b2-361c-42e2-b649-1ca04e17860a.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
            rating={4}
          />
          <Product
            id="98213741"
            title="Lake Placid Vortex Boy's Hockey Ice Skates Medium (3-6)"
            price={1599.99}
            image="https://i5.walmartimages.com/dfw/4ff9c6c9-1911/k2-_d484f7ba-203f-46f3-ba96-74d6ca0b70ed.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
            rating={4}
          />
          <Product
            id="56165165"
            title="Nitro Golf Ultimate Distance Golf Balls, 12 Pack"
            price={999.99}
            image="https://i5.walmartimages.com/dfw/4ff9c6c9-175d/k2-_03de4df9-5bc6-41c4-917e-e5999ea2fce1.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
            rating={3}
          />
          <Product
            id="1234312"
            title="Swim Goggles Anti-fog for Adult Youth Teen Men Women with Large Frame Suitable Swimming Pool Water Park Beach"
            price={499.99}
            image="https://i5.walmartimages.com/dfw/4ff9c6c9-23a6/k2-_6ec63fe5-85eb-444f-a66d-688e0f572ff0.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

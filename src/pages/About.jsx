import logo from "../assets/images/pexels-fauxels-3183165.jpg"

const About = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "rgba(169, 112, 23, 0.82)",
          color: "white",
          padding: "10px",
        }}
      >
        About
      </h1>
      <div style={{backgroundColor:"lightblue", display:"flex", flexDirection:"row"}}>

        <div>
          <img src={logo} alt="" style={{width:"40rem", padding:"2rem", margin:"2rem 1rem 0rem 3rem"}}/>
        </div>


        <div style={{ padding:"7rem", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <div style={{backgroundColor:"#ffe65d", padding:"1rem 2rem", borderRadius:"1rem", width:"90%", marginTop:"-3.5rem"}}>
              <h3 style={{marginBottom:"1rem"}}><b>About us:</b></h3>
              <p style={{color:"black", fontSize:"0.9rem"}}>
              Unicorn Store is an online boutique selling unique, quirky and magical products. We curate only the most whimsical items from around the world to bring a little magic and wonder into your everyday life. From unicorn-themed accessories and decor to mystical gifts and collectibles, we strive to fill your world with rainbows, glitter and all things magical.
              </p>
          </div>
          <div style={{backgroundColor:"#ffe65d", padding:"1rem 2rem", borderRadius:"1rem", width:"90%", marginTop:"2rem"}}>
              <h3 style={{marginBottom:"1rem"}}><b>Our Story:</b></h3>
              <p style={{color:"black", fontSize:"0.9rem"}}>
              Unicorn Store was founded in 2020 by two best friends who shared a love for all things magical and a desire to spread joy. After years of searching for perfect unicorn gifts for friends and family, we decided to create our own store filled with the most wonderful unicorn products we could find. Our mission is simple - to make the world a little more magical, one unicorn product at a time!
              </p>
          </div>
          <div style={{backgroundColor:"#ffe65d", padding:"1rem 2rem", borderRadius:"1rem", width:"90%", marginTop:"2rem"}}>
            <h3 style={{marginBottom:"1.5rem"}}><b>Our Values:</b></h3>
            <ol style={{fontSize:"0.9rem"}}>
              <li><b>Magic -</b> We believe in the power of magic to bring wonder and joy to the world.</li> 
              <li style={{marginTop:"0.5rem"}}> <b> Community -</b> We strive to build an inclusive community of unicorn lovers from all walks of life.</li>
              <li style={{marginTop:"0.5rem"}}><b>Creative -</b> We celebrate creativity in all its forms and support artists and makers around the world.</li>
              <li style={{marginTop:"0.5rem"}}><b>Wonder -</b> We aim to instill a sense of wonder in all who visit our store.</li>
              <li style={{marginTop:"0.5rem"}}><b>Quality -</b> We curate only the highest quality unicorn products for our customers.</li>
            </ol>
          </div>
        </div>

      </div>
    </>
  );
};
export default About;

// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import CommonSection from "../components/UI/CommonSection";
// import Helmet from "../components/Helmet/Helmet";

// import aboutImg2 from "../assets/images/quality.png";

// import "../styles/about.css";

// const About = () => {
//   return (
//     <Helmet title="About-Us">
//       <CommonSection title="About-Us" />
//       <section>
//         <Container className="about__section">
//           <Row className="about__body">
//             <Col lg="6" md="6">
//               <div className="about__content right">
//                 <h2>About Us</h2>
//                 <p>
//                   We are an Australian company that has been in the electronic
//                   retail sector for over 15years! We always aim to provide a
//                   variety of products at the best possible prices, with shipping
//                   and delivery times that are second to none. <br />
//                 </p>
//                 <p>
//                   Our strength in business comes from our will to satisfy our
//                   customers. Our range mainly consists of electrical consumer
//                   products, and gadgets. we are always working to extend our
//                   product base to a wider range. <br />
//                 </p>
//               </div>
//             </Col>
//             <Col lg="6" md="6" className="image2">
//               <div className="about__img">
//                 <img src={aboutImg2} alt="" sty />
//               </div>
//             </Col>
//           </Row>
//           <Row>
//             <Col lg="6" md="6">
//               <div className="about__content left">
//                 <p>
//                   Online shopping has given us the chance to reach our customers
//                   in a more efficient and competitive way, enabling us to give
//                   you our very best deals. Our high-quality and consumer-focused
//                   products lead the market by delivering true innovation and
//                   convenience to our valued consumers. <br />
//                 </p>
//                 <p>
//                   Our promise is to provide the best brands at the best possible
//                   price, accompanied by our passion for customer service. <br />
//                   We always depend on your valuable feedback and hope you enjoy
//                   your shopping experience!
//                 </p>
//               </div>
//             </Col>
//             <Col lg="6" md="6">
//               <div className="about__content right">
//                 <h2>Unsuitable Goods</h2>
//                 <p>
//                   Not withstanding our warranty policy, if you are dissatisfied
//                   with our goods or service you may return the goods within 14
//                   days of our despatch date. It is essential to obtain an
//                   authorisation number prior to returning any goods to us.
//                   Contact us here or in our page .
//                   <br />
//                 </p>
//                 <p>
//                   We will refund your purchase in full, less transport costs on
//                   receipt of the goods. All returned goods must be in "as sold"
//                   condition including all packaging, instructions, invoices etc.
//                   We do not accept unauthorised returns. <br />
//                 </p>
//               </div>
//             </Col>
//           </Row>
//           <Row>
//             <Col lg="6" md="6">
//               <div className="about__content left">
//                 <h2>Faulty Goods</h2>
//                 <p>
//                   Where such goods have been supplied we undertake to repair or
//                   replace on an "express service" basis. It is essential to
//                   obtain an authorisation number prior to returning any goods to
//                   us.
//                   <br />
//                 </p>
//                 <p>
//                   Contact us here. We do not accept unauthorised returns. A fee
//                   of $10(ex GST) and return freight cost will apply where upon
//                   inspection there is no fault found with the equipment.
//                 </p>
//               </div>
//             </Col>
//             <Col lg="6" md="6">
//               <div className="about__content right">
//                 <h2>Need Help? </h2>
//                 <p>
//                   <span>Check Out Our Help Center</span>
//                   Not withstanding our warranty policy, if you are dissatisfied
//                   with our goods or service you may return the goods within 14
//                   days of our despatch date. It is essential to obtain an
//                   authorisation number prior to returning any goods to us.
//                   Contact us here or in our page .
//                   <br />
//                 </p>
//                 <p>
//                   We will refund your purchase in full, less transport costs on
//                   receipt of the goods. All returned goods must be in "as sold"
//                   condition including all packaging, instructions, invoices etc.
//                   We do not accept unauthorised returns. <br />
//                 </p>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default About;

import React from 'react';
import styled from 'styled-components';
import Rimg from '../assets/Responsive.png'
import Seoimg from '../assets/Seo.png'
import "../App.css"

function Services() {
    const Services = styled.section`
        display: flex;
        justify-content: centeral;
        align-items: center;
        flex-direction: column;
        background-color: #222222;
        // background-color: #222831;
    `
    const ServicesHeader = styled.h1`
        font-size: 35px;
        color: #FFF;
        padding: 0px 0px 20px 0px;
        fontFamily: "'Poppins', sans-serif"
    `
    const ServicesPa = styled.p`
        color: #FFF;
        // @media screen and (max-width: 414px) {
            max-width: 300px;
            text-align: center
        }
    `
    const ServicesItemWrapper = styled.section`
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // align-self: center;
        // flex-direction: row;
        display: grid;
        gap: 10px;
        grid-template-columns: auto auto auto;
        // padding: 10px;
        background-color: #222222;
        padding: 0px 100px;
        @media screen and (max-width: 414px) {
            display: flex;
            flex-direction: column
    `
    const ServicesItemCard = styled.div`
        display: flex;
        justify-content: centeral;
        align-items: center;
        flex-direction: column;
        // border: 1px solid #EEEEEE;
        width: 600px;
        padding: 60px

     `
    const Img = styled.img`
        width: 250px;
        padding: 50px 0px;
        // height: 300px
        @media screen and (max-width: 414px) {
            width: 200px
        }
        
    `
    const style ={
        color: "white",
        fontFamily: "'Poppins', sans-serif"    

    }
    const P = styled.p`
        color: white;
        text-align: center;
        font-family: 'Lato', sans-serif;
        @media screen and (max-width: 414px) {
            text-align: center;
            max-width: 300px
        }
    `
    const styleImg = {
        paddingTop: "100px"
    }
    return (
        <Services>
            <ServicesHeader style={style}>My services</ServicesHeader>
            <ServicesPa className='serviceFont'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum perferendis maxime dolores.</ServicesPa>
            <ServicesItemWrapper>
                <ServicesItemCard>
                    <h1 style={style} className="">SEO (Search Engine Optimization)</h1>
                    <P className="serviceFont">
                        Nearly 70% of online experiences begin with a search engine, and less than 1% of searchers 
                        click on the 2nd page.
                        <br />
                        SEO ensures that your users are able to find your website quickly and easily.
                    </P>
                    <Img src={Seoimg} Alt="" />
                </ServicesItemCard>
                <ServicesItemCard>
                    <h1 style={style}>Responsive Design</h1>
                    <P className="serviceFont">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maxime optio vitae ab perspiciati
                        Lorem ipsum dolor sit amet consectetur adipisi.
                        <br />
                        Ajkwjsdhuihsioodjuiadhuihuihwduihuiqeuihcing elit. Nisi maxime optio vitae ab perspiciati
                    </P>
                    <Img src={Rimg} Alt="" style={styleImg} />
                </ServicesItemCard>
            </ServicesItemWrapper>
        </Services>
    );
}

export default Services;
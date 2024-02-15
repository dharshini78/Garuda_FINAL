import React from "react";
import "./Home.css";
import UsedbyCard from "./UsedbyCard";
import Vrcard from "../Vrcard";
import ImageWithText from "../ImageWithText";
import Footer from "../Footer";
import { useState } from "react";
const Home = () => {

  const [account, setaccount] = useState("");
  async function requestAccount(){
    if(window.ethereum){
      console.log("wallet irukku bha");

      try{
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setaccount(accounts[0]);
        console.log(accounts);
      }
      catch(error){
          console.log("etho prachana")
      }
    }
    else{
      console.log("illa")
    }
  }
  
  return (
    <div className="home">
      <div className="bg-gradient-to-r from-black to-gray-900 sm:w-50 md: w-100 ">
        <div className="homecontainer relative">
          <img src="guy.png" alt="" className=" hidden sm:block png absolute w-[800px] right-4 "/>
          <h1 className="text1 md:text-7xl lg:text-8xl xl:text-6xl 2xl:text-8xl font-bold text-[35px] text-[]">
            Garuda.Metaverse
          </h1>
          <h1 className="text2 md:text-3xl text-left  font-normal text-balance text-[16px]">
            Labaratory as a metaverse platform for the healthcare community
            where users can immerse themselves in the study of medical science.
          </h1>

          <div className="twobtn">
            <button className="btn" onClick={requestAccount}>Connect wallet</button>
            <h3 className="poonabutton"><span className="addressbtn">Address: </span> {account}</h3>
          </div>
          <div className="twod">
            <div className="download">
              <img src="src\assets\img\meta.png" className="oculuslogo"></img>
              <p className="ptag">
                Download on <br /> Oculus store
              </p>
            </div>
            <div className="dashboard">
              <img
                src="src\assets\img\physiology.png"
                className="oculuslogo"
              ></img>
              <p className="ptag">
                Try Our
                <br /> Dashboard
              </p>
            </div>
          </div>
        </div>

        {/* used by container */}

        <div className=" my-16  py-10">
          <div className="title ml-[40px] flex gap-2">
            <div className="w-[6px] h-12 bg-[#007FF8]"></div>
            <h1 className="text-5xl font-bold mb-12 text-white font-['Ubuntu',sans-serif]">Used By</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-5 ">
            <UsedbyCard
              title={"Institutions"}
              desc={
                <ul>
                  <li>
                    A unique catalog of medically accurate 3D models of human
                    anatomy and pathologies, including rare diseases.
                  </li>
                  <li>
                    This atlas is designed to be always at hand for medical
                    students, lecturers, and doctors: to view the models at any
                    scale, from any angle, both from inside and outside.
                  </li>
                  <li>It simplifies pathology understanding and learning of it.</li>
                </ul>
              }
            />
            <UsedbyCard
              title={"Doctors"}
              desc={
                "Garuda offers additional practice tools, increased patient awareness through visualizations, pathology visualization for diagnoses, enhanced patient education, and support for full-time and remote consultations. Access the full catalog of 3D models for complex presentations.."
              }
            />
            <UsedbyCard
              title={"Students"}
              desc={
                "Discover engaging learning experiences while utilizing Garuda for self-education, knowledge reinforcement, and preparation for exams and tests. Access the full catalog of 3D models for in-depth learning."
              }
            />
            <UsedbyCard
              title={"Clinics"}
              desc={
                "Garuda provides clinics with an additional practice tool for their entire staff as well as increased patient awareness through visualizations. Utilize unique 3D models for complex presentations for both your staff and patients."
              }
            />
          </div>
        </div>

        {/* virtual reality section */}
        <div className="my-16  py-10">
          <div className="title ml-[40px] flex gap-2">
            <div className="w-[6px] h-12 bg-[#007FF8]"></div>
            <h1 className="text-5xl font-bold mb-12  text-white font-['Ubuntu',sans-serif]">Garuda Virtual Reality</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Vrcard
              img={
                "https://i.ibb.co/CQbshkf/man-with-vr-headset-touching-holographic-screen.jpg"
              }
              title={"Anatomy"}
            />
            <Vrcard
              title={"Pathology"}
              desc={""}
              img={"https://i.ibb.co/5j4RwyC/5633.jpg"}
            />
            <Vrcard
              title={"Automobile"}
              desc={""}
              img={"https://i.ibb.co/5j4RwyC/5633.jpg"}
            />
          </div>
        </div>
        {/* vr-image(left) text-right*/}
        <div className="mt-16 py-10">
          <ImageWithText
            img={
              "https://i.ibb.co/56LYXnq/front-view-scientist-wearing-vr-glasses.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Home;

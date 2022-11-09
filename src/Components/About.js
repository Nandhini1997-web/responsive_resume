import React from "react";
const About = ({ data }) => {
    if (data) {
        var name = data.name;
        // var profilepic = "images/" + data.image;
        var bio = data.bio;
        var street = data.address.street;
        var city = data.address.city;
        var state = data.address.state;
        var zip = data.address.zip;
        var phone = data.phone;
        var email = data.email;
    }
    return (
        <>
<br/>
           <div class="text-left mg-30 bg-gray-400">
            <section id="about">
                <div className="row">
                        <h2 class=" text-center-full text-lg font-bold text-black underline">About Me</h2>
                        <div >
                            <p>
                                {bio}
                            </p>
                        </div>
                    </div><br/><br/>
                    <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm ">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="rounded-t-lg" src="data:image/jpeg;base64,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" alt=""/>
    </a>
  </div>
</div><br/><br/>   
                    
                <div className="row">
                   
                        <div className="columns-contact-details">
                            <h2 class=" text-center-full text-lg font-bold underline">Contact Details</h2>
                            <p className="address">

                                <span>{name}</span>
                                <br />
                                <span>{street}
                                    <br />
                                    {city} {state} ,{zip}
                                </span>
                                <br />
                                <span>{phone}</span>
                                <br />
                                <span>{email}</span>

                            </p>
                        </div>
                    </div><br />
                    <div class="flex flex-col justify-center items-center">
                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center align-center">
                            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                            <span >Download</span>
                        </button><br /><br/>
                    </div>

            </section>
            </div>
        </>

    )
}
export default About;

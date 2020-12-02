import React from "react";

function Contact() {
    return(
        <div>
            <div>
                <h1>Contact Me</h1>
            </div>
            <form>
                <div className="form-row">
                    <label for="name">Name</label>
                    <input type="name" className="form-control"/>
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" className="form-control" aria-describedby="subject"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default Contact;
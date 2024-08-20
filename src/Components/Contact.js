import React from "react";

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b6cd3500-6d22-406b-b08a-6f415ca5e1e9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="container mx-auto shadow p-3 mt-4" id="contact">

            <div className="text-center mt-5">
                <h3>
                    Connect With Me
                </h3>
            </div>

            <form className="form" onSubmit={onSubmit}>
                <p className="title">Send Mail </p>
                <p className="message">I hope you enjoy this page. </p>
                <div className="flex">
                    <label className="w-100">
                        <input type="text" name="name" required className="input" />
                        <span>Name</span>
                    </label>
                </div>

                <label>
                    <input type="email" name="email" required className="input" />
                    <span>Email</span>
                </label>

                <div class="form-floating">
                    <textarea class="form-control" cols="20" rows="10" name="message" 
                        placeholder="How Can We Help You?" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                    <label for="floatingTextarea2">How Can We Help You?</label>
                </div>

                <button className="submit" type="submit">Submit Form</button>
            </form>

            <span>{result}</span>
        </div>
    );
}


export default Contact;
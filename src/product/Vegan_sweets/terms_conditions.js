import Foot from "../../common/footer";
import Nav from "../../common/navbar";

const Terms=()=>{
    return(
        <>
        <Nav/>
        <div className="card  text-white banner header_imag">
        <div className="card-img-overlay text-center top-50">
          <h5 className="card-title fs-1 text-dark">Terms and conditions</h5>
        </div>
      </div>
      <div className="container">
        <div className="refund col-8 lh-lg">
            <p>TERMS AND CONDITIONS</p>
            <p>Please read these Terms and Conditions carefully before using Fitmeals.co.in. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not access the Website.
            </p>
            <ol>
                <li><h6 className="my-4">Use of the Website</h6>
                <p>1.1. You must be at least 13 years old or the legal age in your jurisdiction to use the Website. By using the Website, you represent and warrant that you meet the age requirement.</p>
                <p>1.2. You agree to use the Website only for lawful purposes and in accordance with these Terms. You shall not use the Website in any way that violates applicable laws, regulations, or the rights of others.</p>
                <p>1.3. We reserve the right to modify, suspend, or discontinue any aspect of the Website at any time without prior notice.</p>
                </li>
                <li><h6 className="my-4">Intellectual Property</h6>
                <p>2.1. The content, features, and functionality of the Website, including but not limited to text, graphics, logos, images, videos, and software, are owned by or licensed to us and are protected by copyright, trademark, and other intellectual property laws.</p>
                <p>2.2. You may access and use the Website and its content for your personal, non-commercial use only. You may not reproduce, modify, distribute, transmit, display, perform, or create derivative works from any part of the Website without our prior written permission.</p>
                </li>
                <li><h6 className="my-4">Disclaimer of Warranties</h6>
                <p>3.1. The Website is provided on an “as is” and “as available” basis without any warranties of any kind, whether express or implied. We do not warrant that the Website will be uninterrupted, error-free, or free from viruses or other harmful components.</p>
                <p>3.2. We make no guarantees regarding the accuracy, reliability, or completeness of any information provided on the Website. You acknowledge and agree that any reliance on such information is at your own risk.</p>
                </li>
                <li><h6 className="my-4">Limitation of Liability</h6>
                <p>4.1. To the maximum extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of the Website, including but not limited to any errors or omissions in the content, loss of data, or any other loss or damage.</p>
                </li>
                <li>
                    <h6 className="my-4">Links to Third-Party Websites</h6>
                    <p>5.1. The Website may contain links to third-party websites that are not owned or controlled by us. We have no control over the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that we shall not be responsible for any damages or losses incurred by your use of or reliance on any third-party websites.</p>
                </li>
                <li>
                    <h6 className="my-4">Privacy</h6>
                    <p>6.1. Your use of the Website is subject to our Privacy Policy [provide a hyperlink to your Privacy Policy]. By using the Website, you consent to the collection, use, and disclosure of your information as described in the Privacy Policy.</p>
                </li>
                <li>
                    <h6 className="my-4">Changes to the Terms</h6>
                    <p>8.1. We reserve the right to modify or update these Terms at any time without prior notice. Any changes to the Terms will be effective immediately upon posting the updated version on the Website. Your continued use of the Website after the posting of any</p>
                </li>
            </ol>
        </div>
      </div>
      <Foot/>
        </>
    )
}
export default Terms;
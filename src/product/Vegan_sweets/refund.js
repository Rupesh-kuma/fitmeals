import Foot from "../../common/footer";
import Nav from "../../common/navbar";

const Refund=()=>{
    return(
        <>
        <Nav/>
        <div className="card  text-white banner header_imag">
        <div className="card-img-overlay text-center top-50">
          <h5 className="card-title fs-1 text-dark">Refund and Returns Policy</h5>
        </div>
      </div>
      <div className="container">
        <div className="refund col-8">
            <p>This no cancellation and no refund policy outlines the terms and conditions governing cancellations and refunds for services provided by Fitmeals.co.in By using our services or making a purchase through our Website, you agree to comply with this Policy.
            </p>
            <ol>
                <li><h6 className="my-4">No Cancellation of Services</h6>
                <p>1.1. Once a service has been purchased and the payment has been processed, it cannot be canceled or modified</p>
                <p>1.2. Clients acknowledge and understand that the services offered on our Website may have time-sensitive components, personalized content, or require immediate access upon purchase. Therefore, cancellation requests will not be accepted after the purchase has been completed.</p></li>
                <li><h6 className="my-4">No Refund Policy</h6>
                <p>2.1. All sales are final, and we do not offer refunds for any services or products purchased through our Website.</p>
                <p>2.2. Clients are responsible for carefully reviewing the details of the services and products before making a purchase. We encourage clients to reach out to our customer support team if they have any questions or require further information before completing a purchase.</p>
                <p>2.3. We do not provide refunds for any reason, including but not limited to client dissatisfaction, change of mind, or inability to utilize the services or products.</p>
                </li>
                <li><h6 className="my-4">Exceptions</h6>
                <p>3.1. In the event that a service or product is not delivered as described on our Website or if there is a technical issue preventing access to the purchased service, we will make every reasonable effort to resolve the issue promptly. In such cases, we may, at our discretion, provide alternative solutions or compensations on a case-by-case basis.</p>
                </li>
                <li><h6 className="my-4">Modifications</h6>
                <p>4.1. We reserve the right to modify or amend this Policy at any time without prior notice. Any changes to this Policy will be effective immediately upon posting the updated version on our Website.</p>
                <p>By using our services or making a purchase through our Website, you acknowledge that you have read, understood, and agreed to the terms of this No Cancellation and No Refund Policy.</p>
                </li>
                
            </ol>
        </div>
      </div>
      <Foot/>
        </>
    )
}
export default Refund;
import PageBanner from "../components/PageBanner";
import ContactMe from "../components/ContactMe";
import ContactForm from "../components/ContactForm";



export default function Contact() {
    return (
        <>
            <PageBanner pagename="Contact Me" path="Contact" />
            <ContactMe />
            <ContactForm />
        </>
    )
}

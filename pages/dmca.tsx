import { Container } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";

const DMCA: NextPage = () => {
    const domain = `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}`
    return (
        <Container>
            <h1>Legal Disclaimer </h1>
            <div>
                The author is not responsible for any contents linked or referred to from his pages - If any damage occurs by the use of information presented there, only the author of the respective pages might be liable, not the one who has linked to these pages. {domain} doesn't host any content.
                <br /><br />
                All {domain} does is link or embed content that was uploaded to popular Online Video hosting sites like Youtube.com / Google Video. All youtube/googlevideo users signed a contract with the sites when they set up their accounts which forces them not to upload illegal content. By clicking on any Links to videos while surfing on {domain} you watch content hosted on third parties and {domain} can't take the responsibility for any content hosted on other sites.
                <br /><br />
                We do not upload any videos nor do we know who and where videos are coming from. We do not promote any illegal conduct of any kind. Links to the videos are submitted by users and managed by users.
            </div>
            <h1>DMCA Notice of Copyright Infringement</h1>
            <div>
                {domain} is an online service provider as defined in the Digital Millennium Copyright Act.
                <br /><br />
                We take copyright violation very seriously and will vigorously protect the rights of legal copyright owners. If you are the copyright owner of content which appears on the {domain} website and you did not authorize the use of the content you must notify us in writing in order for us to identify the allegedly infringing content and take action.
                <br /><br />
                We will be unable to take any action if you do not provide us with the required information, so please fill out all fields accurately and completely. You may make a written notice via the contact form as listed below. Your written notice must include the following:
                <br /><br />
                1 - Specific identification of the copyrighted work which you are alleging to have been infringed. If you are alleging infringement of multiple copyrighted works with a single notification you must submit a representative list which specifically identifies each of the works that you allege are being infringed.
                <br /><br />
                2 - Specific identification of the location and description of the material that is claimed to be infringing or to be the subject of infringing activity with enough detailed information to permit us to locate the material. You should include the specific URL or URLs of the web pages where the allegedly infringing material is located.
                <br /><br />
                3 - Information reasonably sufficient to allow us to contact the complaining party which may include a name, address, telephone number and electronic mail address and signature at which the complaining party may be contacted.
                <br /><br />
                4 - A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent or the law.
                <br /><br />
                5 - A statement that the information in the notification is accurate, and under penalty of perjury that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
                <br /><br />
                Written notice should be sent to our designated agent in the <Link href='/contact'>contact page</Link>.
            </div>
        </Container>
    )
}

export default DMCA
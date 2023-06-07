import IMAGE_LINKS from "../img/imageLinks";
import "./AuthorProfile.css";

export interface AuthorProfileProps {
  name: string;
  position: string;
}

export default function AuthorProfile({ name, position }: AuthorProfileProps) {
  return (
    <table className="authorprofile">
      <tbody>
        <tr>
          <td>
            <img
              className="society-logo"
              src={IMAGE_LINKS.LOGO}
              alt="SSSS Logo"
            />
          </td>
          <td>
            <div className="authorprofile-details">
              <p className="authorprofile-name">{name}</p>
              <p className="authorprofile-position">{position}</p>
              <p className="authorprofile-society">
                Software Systems Student Society
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

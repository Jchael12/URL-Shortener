import { useLottie } from "lottie-react";
import Link from "/src/assets/Link.json";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import axios from "axios";

function Main() {
  const options = {
    animationData: Link,
    loop: true,
  };

  const { View } = useLottie(options);

  const [shorten, setShorten] = useState("");
  const [copied, setCopied] = useState(false);
  const [value, setValue] = useState("");
  const [shortenSuccess, setShortenSuccess] = useState(false);
  const [error, setError] = useState("");

  const shortenLink = async () => {
    try {
      const response = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${value}`
      );

      if (response.data && response.data.ok) {
        const data = response.data.result;
        setShorten(data.full_short_link);
        setShortenSuccess(true);
        setError("");
        setValue(""); // Reset input value to empty string
        setTimeout(() => {
          setShortenSuccess(false);
        }, 3000); // Remove success message after 3 seconds
      } else {
        setError("Failed to shorten link");
        setTimeout(() => {
          setError("");
        }, 3000); // Remove error message after 3 seconds
      }
    } catch (error) {
      setError("Error occurred while shortening link");
      setTimeout(() => {
        setError("");
      }, 3000); // Remove error message after 3 seconds
    }
  };

  const handleShortenClick = () => {
    shortenLink();
  };

  return (
    <div className="flex flex-col mx-auto ">
      <div className="md:flex justify-around h-full w-full mt-10 lg:my-20">
        {/* DESCRIPTION */}
        <div className="flex flex-col items-center md:items-start justify-center px-5 py-10">
          <h1 className="text-[42px] leading-10 lg:text-6xl mb-10 font-bold text-gray-700 dark:text-white">
            Shorten your <span className="text-pink-600">links</span> <br />{" "}
            Amplify your <span className="text-purple-700">reach</span>
          </h1>
          <p className="font-medium text-lg">
            Link shortening made simple! Our website allows you to condense
            long, <br /> unwieldy links into concise and clickable URLs. Share
            your content easily and <br /> boost your online presence with our
            hassle-free link shortening service.
          </p>
          <button className="rounded-full bg-gradient-to-r from-[#c13d60] to-[#e58799] w-32 text-white h-12 mt-10">
            Get Started
          </button>
        </div>

        {/* LOTTIE ANIMATION */}

        <div className="p-20 md:p-0 hidden lg:block lg:w-1/3">{View}</div>
      </div>

      {/* INPUT COMPONENT */}

      <div className="flex flex-col items-center rounded-2xl dark:bg-stone-200 bg-gray-100 w-10/12 mx-auto mt-10  lg:mt-0 lg:my-18">
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value} // Set input value
          className="outline-none md:w-11/12 w-10/12 h-16 bg-gradient-to-r from-[#c13d60] to-[#e48898] placeholder:text-white placeholder:font-semibold rounded-xl mt-14 md:mt-20 indent-3 text-white"
          type="url"
          placeholder="Enter URL to shorten..."
          required
        />
        <div className="result flex flex-row items-center gap-6 md:gap-4">
          <button
            onClick={handleShortenClick}
            className="w-60 lg:w-32 h-16 md:h-10 bg-[#c13d60] hover:bg-[#ea9daa] rounded-full text-white my-8 active:bg-[#c13d60]"
          >
            Shorten
          </button>
          <CopyToClipboard text={shorten} onCopy={() => setCopied(true)}>
            <button className="w-10/12 lg:w-32 h-16 md:h-10 bg-[#c13d60] hover:bg-[#ea9daa] rounded-full text-white my-8 active:bg-[#c13d60]">
              Copy
            </button>
          </CopyToClipboard>
        </div>
        {shortenSuccess && (
          <p className="text-green-500 mt-4">Link URL shortened!</p>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default Main;

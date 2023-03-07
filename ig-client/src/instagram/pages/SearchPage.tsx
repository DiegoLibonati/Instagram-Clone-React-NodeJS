import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useForm } from "../../hooks/useForm";
import { FooterMobile } from "../../ui/components/Footer/Mobile/FooterMobile";
import { InputText } from "../../ui/components/Input/InputText";
import { NavBarMobile } from "../../ui/components/NavBar/Mobile/NavBarMobile";
import { UserImage } from "../components/UserImage/UserImage";

export const SearchPage = () => {
  const { formState, onInputChange } = useForm({
    query: "",
  });
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true);
  };

  return (
    <>
      <NavBarMobile
        classNameHeader={
          "flex flex-row items-center justify-start h-14 w-screen shadow-md mb-1 fixed bg-white"
        }
        classNameNav={
          "flex flex-row items-center justify-start h-full w-full p-2"
        }
      >
        {focus && (
          <BsArrowLeft
            color="black"
            size={25}
            onClick={() => setFocus(false)}
          ></BsArrowLeft>
        )}
        <InputText
          id="query"
          onFocus={onFocus}
          placeholder="Buscar..."
          value={formState.query}
          name="query"
          onChange={onInputChange}
          label=""
          classNameInput=" bg-gray-200 rounded-full mx-3 p-1 pl-2 w-full outline-none"
        ></InputText>
      </NavBarMobile>

      {focus && (
        <main className="flex flex-col w-full h-auto items-start justify-center px-3 mt-14">
          <h2 className="font-medium">Recientes</h2>

          <ul className="flex flex-row flex-wrap w-full h-auto">
            <li className="flex flex-row items-center justify-start w-full h-14">
              <UserImage
                className="rounded-full w-12 h-12"
                avatar=""
                name=""
              ></UserImage>
              <h3 className="ml-2 font-medium">die_libonati</h3>
            </li>
            <li className="flex flex-row items-center justify-start w-full h-14">
              <UserImage
                className="rounded-full w-12 h-12"
                avatar=""
                name=""
              ></UserImage>
              <h3 className="ml-2 font-medium">die_libonati</h3>
            </li>{" "}
            <li className="flex flex-row items-center justify-start w-full h-14">
              <UserImage
                className="rounded-full w-12 h-12"
                avatar=""
                name=""
              ></UserImage>
              <h3 className="ml-2 font-medium">die_libonati</h3>
            </li>{" "}
            <li className="flex flex-row items-center justify-start w-full h-14">
              <UserImage
                className="rounded-full w-12 h-12"
                avatar=""
                name=""
              ></UserImage>
              <h3 className="ml-2 font-medium">die_libonati</h3>
            </li>{" "}
            <li className="flex flex-row items-center justify-start w-full h-14">
              <UserImage
                className="rounded-full w-12 h-12"
                avatar=""
                name=""
              ></UserImage>
              <h3 className="ml-2 font-medium">die_libonati</h3>
            </li>{" "}
            <li className="flex flex-row items-center justify-start w-full h-14">
              <UserImage
                className="rounded-full w-12 h-12"
                avatar=""
                name=""
              ></UserImage>
              <h3 className="ml-2 font-medium">die_libonati</h3>
            </li>{" "}
            <li className="flex flex-row items-center justify-start w-full h-14">
              <UserImage
                className="rounded-full w-12 h-12"
                avatar=""
                name=""
              ></UserImage>
              <h3 className="ml-2 font-medium">die_libonati</h3>
            </li>{" "}
            <li className="flex flex-row items-center justify-start w-full h-14">
              <UserImage
                className="rounded-full w-12 h-12"
                avatar=""
                name=""
              ></UserImage>
              <h3 className="ml-2 font-medium">die_libonati</h3>
            </li>{" "}
            <li className="flex flex-row items-center justify-start w-full h-14">
              <UserImage
                className="rounded-full w-12 h-12"
                avatar=""
                name=""
              ></UserImage>
              <h3 className="ml-2 font-medium">die_libonati</h3>
            </li>{" "}
            <li className="flex flex-row items-center justify-start w-full h-14">
              <UserImage
                className="rounded-full w-12 h-12"
                avatar=""
                name=""
              ></UserImage>
              <h3 className="ml-2 font-medium">die_libonati</h3>
            </li>{" "}
            <li className="flex flex-row items-center justify-start w-full h-14">
              <UserImage
                className="rounded-full w-12 h-12"
                avatar=""
                name=""
              ></UserImage>
              <h3 className="ml-2 font-medium">die_libonati</h3>
            </li>
          </ul>
        </main>
      )}

      <FooterMobile></FooterMobile>
    </>
  );
};

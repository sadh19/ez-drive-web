import InputText from "@/src/components/inputs/InputText";

export default function Login() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between bg-custom-blue-bg">
        <div className="container h-screen flex items-center">
          <div className="border-none flex w-full min-h-[45rem] bg-black rounded-md">
            <div className="w-2/4 bg-login bg-center bg-cover rounded-tl-md rounded-bl-md"></div>
            <div className="w-2/4 bg-white rounded-tr-md rounded-br-md flex flex-col justify-center items-center">
              <span className="text-base text-custom-dark font-bold">
                LOGIN
              </span>
              <InputText />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const handleSubscribe = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      await createSubscriber({
        variables: {
          name,
          email,
        },
      });

      navigate("/event");
    },
    [name, email]
  );

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex items-center">
      <div className="flex-1 bg-react bg-top-4 bg-no-repeat flex flex-col items-center">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-[1100px] mt-20 mx-auto gap-8 sm:px-2">
          <div className="flex flex-col items-center sm:items-start max-w-[640px] px-2 sm:px-0">
            <Logo />

            <h1 className="mt-8 text-[2.25rem] leading-tight text-center sm:text-left px-2 sm:px-0">
              Construa uma
              <strong className="text-orange-500"> aplicação completa</strong>,
              do zero, com <strong className="text-orange-500">React</strong>
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed text-justify text-last-center sm:text-left sm:text-last-left px-6 sm:px-0">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>

          <div className="p-8 bg-gray-700 border-y sm:border border-gray-500 sm:rounded w-full sm:w-fit">
            <strong className="text-xl mb-6 block">
              Inscreva-se gratuitamente
            </strong>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2 w-full"
            >
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="text"
                placeholder="Seu nome completo"
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="email"
                placeholder="Digite seu e-mail"
                onChange={(event) => setEmail(event.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-yellow-500 text-gray-600 uppercase py-4 rounded font-bold text-sm hover:bg-yellow-700 transition-colors disabled:opacity-50"
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>

        <img
          src="/src/assets/code_mockup.png"
          className="mt-0 sm:mt-10 p-2"
          alt="Code Mockup"
        />
      </div>
    </div>
  );
}

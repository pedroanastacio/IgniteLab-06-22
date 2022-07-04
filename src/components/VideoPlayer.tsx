import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";
import { useGetLessonBySlugQuery } from "../graphql/generated";

import "@vime/core/themes/default.css";

interface VideoPlayerProps {
  lessonSlug: string;
}

export function VideoPlayer(props: VideoPlayerProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>...Carregando</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start flex-col md:flex-row gap-10 md:gap-16">
          <div className="flex-1">
            <h1 className="text-xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-yellow-700"
                  src={data.lesson.teacher.avatarURL}
                  alt={data.lesson.teacher.name}
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-xs block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-4 sm:gap-8 w-full md:w-fit">
            <a
              href=""
              className="p-4 text-sm text-gray-600 bg-yellow-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-yellow-700 transition-colors sm:flex-1"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a
              href=""
              className="p-4 text-sm border border-green-500 text-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-500 hover:text-gray-900 transition-colors sm:flex-1"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch justify-between gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="flex gap-6">
              <div className="bg-yellow-700 h-full p-6 flex items-center text-gray-600">
                <FileArrowDown size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-xl">Material complementar</strong>
                <p className="text-sm text-gray-200 mt-2">
                  Acesse o material complementar para acelerar o seu
                  desenvolvimento
                </p>
              </div>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch justify-between gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="flex gap-6">
              <div className="bg-yellow-700 h-full p-6 flex items-center text-gray-600">
                <Image size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-xl">Wallpapers exclusivos</strong>
                <p className="text-sm text-gray-200 mt-2">
                  Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                  máquina
                </p>
              </div>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

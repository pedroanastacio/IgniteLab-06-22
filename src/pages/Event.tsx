import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { VideoPlayer } from "../components/VideoPlayer";
import { useGetFirstLessonQuery } from "../graphql/generated";

export function Event() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const { data } = useGetFirstLessonQuery();

  useEffect(() => {
    if(!slug && data) {
      navigate(`lesson/${data?.lessons[0].slug}`)
    }
  }, [slug, data])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <VideoPlayer lessonSlug={slug} /> : <div className="flex-1"></div>}
        <Sidebar />
      </main>
    </div>
  );
}


import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";

async function getData() {
    const query = `*[_type == "post" && slug.current == "${slug}"]`;

    const data = await client.fetch(query);
    return data;
}

export default async function SlugPage({
    params,
}: {
    params: { slug: string };
}) {
    const data = await getData(params.slug) as Post;

    return (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <header className="pt-6 xl:pb-6">
                <div className="space-y-1 text-center">
                    <div className="sp"></div>
                </div>
            </header>
        </div>
    )
}

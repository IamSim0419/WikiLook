
import getWikiResults from "@/lib/getWikiResults"
import Items from "./components/Items"

type Props = {
    params: {
        searchTerm: string
    }
}

export const generateMetadata = async ({ params: { searchTerm }}: Props) => {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll('%20', ' ')

    //data and query might have no result (?)
    if (!data?.query?.pages) {
        return {
            title: `${displayTerm} Not Found`
        }
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }
}

const page = async ({ params: { searchTerm }}: Props) => {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const results: Result[] | undefined =data?.query?.pages

    const content = (
      <main className="bg-slate-200 my-2 p-4 mx-auto w-10/12 min-h-screen rounded-xl">
        {results ? (
          Object.values(results).map((result) => {
            return <Items key={result.pageid} result={result} />
          })
        ) : (
          <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
        )}
      </main>
    );

    return content
}

export default page






import { Badge } from "@/components/ui/badge"

const news = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, aspernatur. Porro, facere aperiam. Necessitatibus exercitationem commodi ut, non delectus vitae.";

const RightBar = () => {
  return (
    <div className="py-5 px-20 space-y-12 border-l-2 border-l-primary w-1/2">
        <div className="p-4 shadow-md rounded-xl bg-background max-w-sm">
            <div className="relative bottom-5 rounded-full bg-third text-third-foreground w-fit">
                <h4 className="px-4 py-2">Latest News</h4>
            </div>
            <div className="p-4 flex flex-col gap-2">
                <ul className="divide-y-2">
                    <li className="p-2">{news.substring(0, 25) + "..."}</li>
                    <li className="p-2">{news.substring(0, 25) + "..."}</li>
                    <li className="p-2">{news.substring(0, 25) + "..."}</li>
                    <li className="p-2">{news.substring(0, 25) + "..."}</li>
                    <li className="p-2">{news.substring(0, 25) + "..."}</li>
                </ul>
            </div>
        </div>
        <div className="p-4 shadow-md rounded-xl bg-background max-w-sm">
            <div className="relative bottom-5 rounded-full bg-third text-third-foreground w-fit">
                <h4 className="px-4 py-2">Tags</h4>
            </div>
            <div className="p-4 flex flex-wrap gap-2">
                <Badge>1</Badge>
                <Badge>2</Badge>
                <Badge>3</Badge>
                <Badge>4</Badge>
                <Badge>5</Badge>
                <Badge>6</Badge>
                <Badge>7</Badge>
                <Badge>8</Badge>
                <Badge>9</Badge>
                <Badge>10</Badge>
            </div>
        </div>
    </div>
  )
}

export default RightBar
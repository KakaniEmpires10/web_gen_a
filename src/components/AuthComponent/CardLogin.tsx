import Image from "next/image";
import { Alert, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import LoginForm from "./LoginForm";
import { Separator } from "../ui/separator";

const CardLogin = () => {
  return (
    <Card className="relative border-0 min-w-[28rem] top-14 border-t-4 border-primary">
      <CardHeader>
        <Alert className="absolute px-20 py-8 -top-10 left-0 right-0 mx-auto flex flex-col justify-center gap-4 items-center max-w-sm shadow shadow-primary">
          <CardTitle className="font-bold text-2xl">Login</CardTitle>
          <Separator />
          <AlertDescription className="flex justify-around items-center w-full mt-2">
            <Button
              asChild
              className="rounded-full overflow-visible hover:scale-110"
              size="icon"
              variant="link"
            >
              <Link href="#">
                <Image
                  src="/Facebook_flower.png"
                  alt="Alt_login"
                  height={35}
                  width={35}
                />
              </Link>
            </Button>
            <Button
              asChild
              className="rounded-full overflow-visible hover:scale-110"
              size="icon"
              variant="link"
            >
              <Link href="#">
                <Image
                  src="/Instagram_flower.png"
                  alt="Alt_login"
                  height={35}
                  width={35}
                />
              </Link>
            </Button>
            <Button
              asChild
              className="rounded-full overflow-visible hover:scale-110"
              size="icon"
              variant="link"
            >
              <Link href="#">
                <Image
                  src="/Google_flower.png"
                  alt="Alt_login"
                  height={35}
                  width={35}
                />
              </Link>
            </Button>
          </AlertDescription>
        </Alert>
      </CardHeader>
      <CardContent className="mt-28">
        <LoginForm />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default CardLogin;

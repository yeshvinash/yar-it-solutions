import Image from "next/image";
import { cn } from "@/utils/cn";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function Logo({
  className,
  width = 200,
  height = 70,
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/logo/header_logo.png"
      alt="YAR IT Solutions"
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto max-h-full w-auto object-contain", className)}
    />
  );
}

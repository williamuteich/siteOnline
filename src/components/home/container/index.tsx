import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
    return (
        <div className="max-w-screen-xl py-8 pb-8 m-auto pr-6 pl-6 xl:pr-6 xl:pl-6 " >
            {children}
        </div>
    );
}

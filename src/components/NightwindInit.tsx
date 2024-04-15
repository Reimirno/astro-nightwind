//@ts-ignore no typing info available for nightwind
import nightwind from "nightwind/helper";

export default function NightwindInit() {
  return (
    <> {<script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />} </>
  );
}

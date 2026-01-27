import AssetsChart from "./components/assets-chart";
import ProfileProgressWidget from "./components/ProfileProgressWidget";
import { useAssets } from "@/hook/useAssets";
import { useMemo } from "react";

const DashboardPage = () => {
  const { assets } = useAssets();

  const assetCounts = useMemo(() => {
    const verified = assets.filter(
      (asset) => asset.verified === true || asset.status?.toLowerCase() === "verified"
    );
    const pending = assets.filter(
      (asset) =>
        !asset.verified &&
        (asset.status?.toLowerCase() === "pending" ||
          asset.status?.toLowerCase() === "processing" ||
          !asset.status)
    );
    const failed = assets.filter(
      (asset) =>
        asset.status?.toLowerCase() === "rejected" ||
        asset.status?.toLowerCase() === "failed"
    );

    // Calculate total worth of verified assets
    const verifiedWorth = verified.reduce((total, asset) => {
      const worth =
        typeof asset.assetWorth === "string"
          ? parseFloat(asset.assetWorth.replace(/[^0-9.-]+/g, "")) || 0
          : asset.assetWorth || 0;
      return total + worth;
    }, 0);

    return {
      verified: verified.length,
      pending: pending.length,
      failed: failed.length,
      verifiedWorth,
    };
  }, [assets]);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="font-inter space-y-[27px] w-full">
      <ProfileProgressWidget />
      <div className="w-full flex justify-start items-center flex-wrap gap-2">
        <div className="max-w-[260px] h-[120px] w-full flex flex-col items-start gap-2 font-medium bg-black/5 p-4 rounded-[16px]">
          <span className="text-[12px] text-[#8C94A6] gap-2 flex items-center font-medium">
            <img
              src="/icons/balance.svg"
              alt="balance"
              className="text-[#8C94A6] w-[20.67px] h-[20.67px]"
            />
            Credit Balance
          </span>
          <div className="text-[28px] font-semibold text-[#1A1A21]">
            $0.0
          </div>
        </div>
        <div className="max-w-[260px] h-[120px] w-full flex flex-col items-start gap-2 font-medium bg-black/5 p-4 rounded-[16px]">
          <div className="text-[12px] font-medium text-[#8C94A6]">
            Total Assets Worth
          </div>
          <div className="text-[28px] font-semibold text-[#1A1A21]">
            {formatCurrency(assetCounts.verifiedWorth)}
          </div>
        </div>
        <div className="max-w-[260px] h-[120px] w-full flex flex-col items-start gap-2 font-medium bg-black/5 p-4 rounded-[16px]">
          <div className="text-[12px] font-medium text-[#8C94A6]">
            Total Verified Assets
          </div>
          <div className="text-[28px] font-semibold text-[#1A1A21]">
            {assetCounts.verified}
          </div>
        </div>

        <div className="max-w-[260px] h-[120px] w-full flex flex-col items-start gap-2 font-medium bg-black/5 p-4 rounded-[16px]">
          <div className="text-[12px] font-medium text-[#8C94A6]">
            Pending Verification
          </div>
          <div className="text-[28px] font-semibold text-[#1A1A21]">
            {assetCounts.pending}
          </div>
        </div>
      </div>

      <div>
        <AssetsChart />
      </div>

      {/* Tradivctions */}
      <div>
        {/* <AssetsTransaction /> */}
      </div>
    </div>
  );
};

export default DashboardPage;

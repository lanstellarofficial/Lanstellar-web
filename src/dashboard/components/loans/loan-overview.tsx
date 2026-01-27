/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CheckCircle,
  CircleMinus,
  Clock,
  Loader,
  Trash2,
  MapPin,
  Calendar,
  Percent,
  CreditCard,
  Wallet,
  Receipt,
  Fuel,
  Banknote,
  LayoutGrid,
  List,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DocsPreview from "../assets/docsPreview";
import { deleteLoan } from "@/lib/api-service";
import { useLoans } from "@/hook/useLoans";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import RequestLoanDialog from "./request-loan-dialog";

const StatusBadge = ({ status }: { status: string }) => {
  interface StatusStyles {
    bg: string;
    text: string;
    icon: React.ComponentType<{ className?: string }> | null;
  }

  const getStatusStyles = (status: string): StatusStyles => {
    switch (status.toLowerCase()) {
      case "requested":
        return { bg: "#FFF7E7", text: "#F4B027", icon: Clock };
      case "repaid":
        return { bg: "#ECFFF1", text: "#29B250", icon: CheckCircle };
      case "cancelled":
        return { bg: "#FFF1F0", text: "#FB3931", icon: CircleMinus };
      default:
        return { bg: "#F3F4F6", text: "#374151", icon: null };
    }
  };

  const styles = getStatusStyles(status);

  return (
    <div
      className="items-center py-1.5 rounded-[4px] w-fit h-[21px] flex gap-2 px-2 justify-center"
      style={{ backgroundColor: styles.bg, color: styles.text }}
    >
      {styles.icon && <styles.icon className="w-3.5 h-3.5" />}
      <span className="text-[13.78px] font-medium">{status}</span>
    </div>
  );
};

interface Loan {
  _id: string;
  loanPurpose: string;
  assetId: {
    assetTitle: string;
    assetCategory: string;
    assetLocation: string;
    assetWorth: string;
    docs: string[];
    loanStatus: boolean;
    verified: boolean;
  };
  amount: number;
  loanStatus: boolean;
  verified: boolean;
  duration: string;
  status: string;
  createdAt: string;
  due?: string;
  interestRate: number;
  paymentPlan: number;
}

const LoanOverview = () => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"table" | "card">("card");

  const { isLoadingLoans, loans, error, refetch: fetchLoans } = useLoans();

  // Log any errors from the hook
  if (error) {
    console.error("Error fetching loans:", error);
  }

  const handleDeleteLoan = async (): Promise<void> => {
    if (!selectedLoan?._id) return;
    setIsDeleting(true);
    try {
      const response = await deleteLoan(selectedLoan._id);
      if (response.success) {
        // Refetch loans after successful deletion
        fetchLoans();
        setOpen(false);
      } else {
        console.error("Failed to delete loan:", response.message);
      }
    } catch (error) {
      console.error("Delete error:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoadingLoans) {
    return (
      <div className="flex justify-center items-center py-10 text-[#8C94A6]">
        Loading loans...
      </div>
    );
  }

  if (loans.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 h-[58vh]">
        <Empty>
          <EmptyHeader>
            <EmptyMedia
              variant="icon"
              className="w-[215px] h-[142.01px] bg-white"
            >
              <img
                src="/empty.svg"
                alt="Empty"
                width={215}
                height={142}
                className="w-[215px] h-[142.01px]"
              />
            </EmptyMedia>
            <EmptyTitle>Loans</EmptyTitle>
            <EmptyDescription className="text-[13.78px] text-[#8C94A6] font-medium">
              No Loan Added Yet.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <RequestLoanDialog onSuccess={fetchLoans} className="w-full" />
          </EmptyContent>
        </Empty>
      </div>
    );
  }

  return (
    <div>
      <Card className="border-none shadow-none rounded-none">
        <CardHeader className="flex flex-row justify-between items-center text-[16px] px-0 text-black font-semibold">
          <span>Loan Overview</span>
          <div className="flex items-center gap-3">
            {/* View Toggle Buttons */}
            <div className="flex items-center bg-[#F8F8FB] rounded-lg p-1">
              <button
                onClick={() => setViewMode("card")}
                className={`p-2 rounded-md transition-all ${viewMode === "card"
                  ? "bg-white shadow-sm text-[#5B1E9F]"
                  : "text-[#8C94A6] hover:text-[#49576D]"
                  }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-2 rounded-md transition-all ${viewMode === "table"
                  ? "bg-white shadow-sm text-[#5B1E9F]"
                  : "text-[#8C94A6] hover:text-[#49576D]"
                  }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            <RequestLoanDialog />
          </div>
        </CardHeader>

        <CardContent className="text-[13.78px] flex flex-col font-medium w-full justify-center items-center text-[#8C94A6] px-0">
          {viewMode === "table" ? (
            /* Table View */
            <Table className="scrollbar-hide">
              <TableHeader className="bg-[#F8F8FB] text-[#49576D] border-b border-b-[#E5E5E5] font-medium text-[12.06px]">
                <TableRow>
                  <TableHead>Purpose of loan</TableHead>
                  <TableHead>Asset Collateral</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Loan Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loans.map((loan: Loan) => (
                  <TableRow
                    key={loan._id}
                    className="hover:bg-[#F8F8FB] transition-colors cursor-pointer"
                    onClick={() => {
                      setSelectedLoan(loan as unknown as Loan);
                      setOpen(true);
                    }}
                  >
                    <TableCell className="text-[#1A1A1A] capitalize">
                      {loan.loanPurpose}
                    </TableCell>
                    <TableCell className="text-[#1A1A21]">
                      {typeof loan.assetId === "string"
                        ? loan.assetId
                        : (loan.assetId as { assetTitle: string }).assetTitle}
                    </TableCell>
                    <TableCell className="text-[#1A1A21] font-semibold">
                      ${loan.amount}
                    </TableCell>
                    <TableCell className="text-[#1A1A21]">
                      {loan.duration}
                    </TableCell>
                    <TableCell className="text-[#1A1A21]">
                      <StatusBadge status={loan.status ?? ""} />
                    </TableCell>
                    <TableCell className="text-[#1A1A21] gap-3 flex flex-col">
                      <div>{loan?.createdAt?.slice(0, 10) || ""}</div>

                      {(loan as any).due && (
                        <span className="text-[#49576D] flex flex-row items-center font-medium text-[12.06px]">
                          <img
                            src={"/icons/arrow.svg"}
                            width={24}
                            height={24}
                            alt="arrow"
                          />
                          <div>{(loan as any).due?.slice(0, 10) || ""}</div>
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            /* Card View */
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {loans.map((loan: Loan) => (
                <div
                  key={loan._id}
                  onClick={() => {
                    setSelectedLoan(loan as unknown as Loan);
                    setOpen(true);
                  }}
                  className="bg-white border border-[#E4E3EC] rounded-xl p-4 cursor-pointer hover:border-[#5B1E9F]/30 hover:shadow-md transition-all"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-xs text-[#8C94A6] font-medium uppercase">
                        {typeof loan.assetId === "string"
                          ? "Asset"
                          : loan.assetId.assetCategory}
                      </p>
                      <h3 className="text-[15px] font-semibold text-[#1A1A21] capitalize mt-0.5">
                        {loan.loanPurpose}
                      </h3>
                    </div>
                    <StatusBadge status={loan.status ?? ""} />
                  </div>

                  {/* Loan Amount */}
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-[#1A1A21]">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 0,
                      }).format(loan.amount)}
                    </p>
                  </div>

                  {/* Loan Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#8C94A6] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        Duration
                      </span>
                      <span className="text-[#1A1A21] font-medium">
                        {loan.duration} months
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#8C94A6] flex items-center gap-1.5">
                        <Percent className="w-3.5 h-3.5" />
                        Interest Rate
                      </span>
                      <span className="text-[#1A1A21] font-medium">
                        {loan.interestRate}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#8C94A6] flex items-center gap-1.5">
                        <CreditCard className="w-3.5 h-3.5" />
                        Payments
                      </span>
                      <span className="text-[#1A1A21] font-medium">
                        {loan.paymentPlan} installments
                      </span>
                    </div>
                  </div>

                  {/* Collateral Info */}
                  <div className="bg-[#F8F8FB] rounded-lg p-3">
                    <p className="text-xs text-[#8C94A6] font-medium mb-1">
                      Collateral Asset
                    </p>
                    <p className="text-sm font-medium text-[#1A1A21] capitalize">
                      {typeof loan.assetId === "string"
                        ? loan.assetId
                        : loan.assetId.assetTitle}
                    </p>
                    {typeof loan.assetId !== "string" && loan.assetId.assetLocation && (
                      <div className="flex items-center gap-1 mt-1 text-[#49576D] text-xs">
                        <MapPin className="w-3 h-3" />
                        <span>{loan.assetId.assetLocation}</span>
                      </div>
                    )}
                  </div>

                  {/* Date Footer */}
                  <div className="mt-3 pt-3 border-t border-[#E4E3EC] flex items-center justify-between text-xs text-[#8C94A6]">
                    <span>Created: {loan?.createdAt?.slice(0, 10) || ""}</span>
                    {(loan as any).due && (
                      <span className="text-[#49576D] font-medium">
                        Due: {(loan as any).due?.slice(0, 10)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg p-0 overflow-hidden rounded-2xl border-0">
          {selectedLoan && (
            <div className="flex flex-col">
              {/* Header with gradient background */}
              <div className="bg-gradient-to-br from-[#5B1E9F] to-[#439EFF] p-6 text-white">
                <DialogHeader className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm font-medium capitalize">
                      {selectedLoan.assetId.assetCategory}
                    </span>
                    <div className="flex items-center gap-2">
                      {/* Loan Status Badge */}
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${selectedLoan.status?.toLowerCase() === "approved" || selectedLoan.status?.toLowerCase() === "repaid"
                          ? "bg-emerald-400/20 text-emerald-100"
                          : selectedLoan.status?.toLowerCase() === "cancelled" || selectedLoan.status?.toLowerCase() === "rejected"
                            ? "bg-red-400/20 text-red-100"
                            : "bg-amber-400/20 text-amber-100"
                          }`}
                      >
                        {selectedLoan.status?.toLowerCase() === "approved" || selectedLoan.status?.toLowerCase() === "repaid"
                          ? `✓ ${selectedLoan.status}`
                          : selectedLoan.status?.toLowerCase() === "cancelled" || selectedLoan.status?.toLowerCase() === "rejected"
                            ? `✕ ${selectedLoan.status}`
                            : `⏳ ${selectedLoan.status || "Pending"}`}
                      </span>
                    </div>
                  </div>
                  <DialogTitle className="text-2xl font-bold capitalize tracking-tight">
                    {selectedLoan.loanPurpose}
                  </DialogTitle>
                </DialogHeader>

                {/* Loan amount highlight */}
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                    }).format(selectedLoan.amount)}
                  </span>
                  <span className="text-white/70 text-sm">loan amount</span>
                </div>

                {/* Quick stats */}
                <div className="mt-4 flex gap-4">
                  <div className="flex items-center gap-1.5 text-white/80 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedLoan.duration} months</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/80 text-sm">
                    <Percent className="w-4 h-4" />
                    <span>{selectedLoan.interestRate}% interest</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/80 text-sm">
                    <CreditCard className="w-4 h-4" />
                    <span>{selectedLoan.paymentPlan} payments</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-5">
                {/* Collateral Asset Card */}
                <div className="bg-[#F8F8FB] rounded-xl p-4">
                  <p className="text-xs font-medium text-[#8C94A6] uppercase tracking-wider mb-2">
                    Collateral Asset
                  </p>
                  <h3 className="text-[15px] font-semibold text-[#1A1A21] capitalize">
                    {selectedLoan.assetId.assetTitle}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-[#49576D] text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedLoan.assetId.assetLocation}</span>
                  </div>
                  <div className="mt-3">
                    <DocsPreview
                      docs={
                        Array.isArray(selectedLoan.assetId.docs)
                          ? selectedLoan.assetId.docs.map((str) => ({
                            cloudinaryUrl: str,
                          }))
                          : selectedLoan.assetId.docs
                      }
                    />
                  </div>
                </div>

                {/* Fees Breakdown */}
                <div>
                  <p className="text-xs font-medium text-[#8C94A6] uppercase tracking-wider mb-3">
                    Payment Breakdown
                  </p>
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between py-2 border-b border-dashed border-[#E5E5E5]">
                      <div className="flex items-center gap-2.5 text-[#49576D]">
                        <div className="w-7 h-7 rounded-lg bg-[#5B1E9F]/10 flex items-center justify-center">
                          <Wallet className="w-3.5 h-3.5 text-[#5B1E9F]" />
                        </div>
                        <span className="text-sm font-medium">
                          Principal Amount
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-[#1A1A21]">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(selectedLoan.amount)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b border-dashed border-[#E5E5E5]">
                      <div className="flex items-center gap-2.5 text-[#49576D]">
                        <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center">
                          <Percent className="w-3.5 h-3.5 text-amber-600" />
                        </div>
                        <span className="text-sm font-medium">
                          Interest ({selectedLoan.interestRate}%)
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-[#1A1A21]">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(
                          selectedLoan.amount *
                          (selectedLoan.interestRate / 100)
                        )}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b border-dashed border-[#E5E5E5]">
                      <div className="flex items-center gap-2.5 text-[#49576D]">
                        <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          <Receipt className="w-3.5 h-3.5 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium">
                          Processing Fee (0.8%)
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-[#1A1A21]">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(selectedLoan.amount * 0.008)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b border-dashed border-[#E5E5E5]">
                      <div className="flex items-center gap-2.5 text-[#49576D]">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                          <Fuel className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <span className="text-sm font-medium">
                          Gas Fee (0.2%)
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-[#1A1A21]">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(selectedLoan.amount * 0.002)}
                      </span>
                    </div>

                    {/* Total */}
                    <div className="flex items-center justify-between pt-3 mt-1">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#1A1A21] flex items-center justify-center">
                          <Banknote className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-[#1A1A21]">
                          Total Repayment
                        </span>
                      </div>
                      <span className="text-lg font-bold text-[#1A1A21]">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(
                          selectedLoan.amount *
                          (1 +
                            selectedLoan.interestRate / 100 +
                            0.008 +
                            0.002)
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Installment Info */}
                <div className="bg-gradient-to-r from-[#F8F8FB] to-[#F0F4FF] rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#8C94A6] font-medium">
                      Per Installment
                    </p>
                    <p className="text-xl font-bold text-[#1A1A21]">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(
                        (selectedLoan.amount *
                          (1 +
                            selectedLoan.interestRate / 100 +
                            0.008 +
                            0.002)) /
                        selectedLoan.paymentPlan
                      )}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[#8C94A6] font-medium">
                      Payment Schedule
                    </p>
                    <p className="text-sm font-semibold text-[#49576D]">
                      within {selectedLoan.duration} months
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button className="flex-1 h-12 bg-gradient-to-r from-[#5B1E9F] to-[#439EFF] hover:opacity-90 text-white rounded-xl font-semibold text-[15px] shadow-lg shadow-[#5B1E9F]/20">
                    Repay Now
                  </Button>
                  {/* Only show delete button if loan is not approved or repaid */}
                  {selectedLoan.status?.toLowerCase() !== "approved" &&
                    selectedLoan.status?.toLowerCase() !== "repaid" && (
                      <Button
                        onClick={handleDeleteLoan}
                        disabled={isDeleting}
                        variant="outline"
                        className="h-12 w-12 rounded-xl border-red-200 hover:bg-red-50 hover:border-red-300 text-red-500"
                      >
                        {isDeleting ? (
                          <Loader className="w-5 h-5 animate-spin" />
                        ) : (
                          <Trash2 className="w-5 h-5" />
                        )}
                      </Button>
                    )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoanOverview;

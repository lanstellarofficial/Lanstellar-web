import { useState } from "react";
import { useCurrentUser } from "@/hook/useCurrentUser";
import {
    Clock,
    X,
    AlertCircle,
    Check,
} from "lucide-react";

export default function ProfileProgressWidget() {
    const { user } = useCurrentUser();
    const [isDismissed, setIsDismissed] = useState(false);

    // Only show for borrowers
    if (!user || user.userType !== "borrower" || isDismissed) {
        return null;
    }

    // Get document status from user object
    const documentStatus = user.documentStatus;

    // If no documents or no documentStatus, don't show the widget
    if (!documentStatus || documentStatus.total === 0) {
        return null;
    }

    // Calculate progress based on document verification status
    // Pending = 50%, Completed/Approved = 100
    const completedDocs = documentStatus.completed || documentStatus.reviewApproved;
    const pendingDocs = documentStatus.pending + documentStatus.reviewPending + documentStatus.processing;
    const failedDocs = documentStatus.failed + documentStatus.reviewRejected;

    // Determine the overall status
    let status: "pending" | "completed" | "failed" | "processing";
    let progress: number;

    if (completedDocs > 0) {
        status = "completed";
        progress = 100;
    } else if (failedDocs > 0) {
        status = "failed";
        progress = 0;
    } else if (pendingDocs > 0) {
        status = "pending";
        progress = 50; // Pending shows 50%
    } else {
        status = "processing";
        progress = 50;
    }

    // Don't show widget if all documents are approved/completed
    if (status === "completed") {
        return null;
    }

    const getStatusConfig = () => {
        switch (status) {
            case "pending":
                return {
                    text: "Under Review",
                    subtext: `${pendingDocs} document${pendingDocs > 1 ? "s" : ""} pending review`,
                    color: "#FBBF24",
                    bgColor: "bg-amber-50",
                    textColor: "text-amber-600",
                    icon: <Clock className="w-4 h-4" />,
                };
            case "failed":
                return {
                    text: "Action Required",
                    subtext: `${failedDocs} document${failedDocs > 1 ? "s" : ""} need attention`,
                    color: "#EF4444",
                    bgColor: "bg-red-50",
                    textColor: "text-red-600",
                    icon: <AlertCircle className="w-4 h-4" />,
                };
            default:
                return {
                    text: "Completed",
                    subtext: `${completedDocs} document${completedDocs > 1 ? "s" : ""} need attention`,
                    color: "#22C55D",
                    bgColor: "bg-green-50",
                    textColor: "text-green-600",
                    icon: <Check className="w-4 h-4" />,
                };
        }
    };

    const statusConfig = getStatusConfig();

    // SVG donut chart calculations
    const size = 40;
    const strokeWidth = 4;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="font-inter w-full relative">
            <div className="bg-white flex items-center justify-between rounded-2xl border border-[#E4E3EC] p-4">
                {/* Donut Chart with Status */}
                <div className="flex items-center gap-4">
                    {/* Donut Chart */}
                    <div className="relative flex-shrink-0">
                        <svg
                            width={size}
                            height={size}
                            className="transform -rotate-90"
                        >
                            {/* Background circle */}
                            <circle
                                cx={size / 2}
                                cy={size / 2}
                                r={radius}
                                fill="none"
                                stroke="#E4E3EC"
                                strokeWidth={strokeWidth}
                            />
                            {/* Progress circle */}
                            <circle
                                cx={size / 2}
                                cy={size / 2}
                                r={radius}
                                fill="none"
                                stroke={statusConfig.color}
                                strokeWidth={strokeWidth}
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                className="transition-all duration-700 ease-out"
                            />
                        </svg>
                    </div>

                    {/* Status Info */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-[14px] font-semibold text-[#1A1A21] mb-1">
                            Document Verification
                        </h3>
                        <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-lg ${statusConfig.bgColor}`}>
                            <span className={statusConfig.textColor}>
                                {statusConfig.icon}
                            </span>
                            <span className={`text-[12px] font-medium ${statusConfig.textColor}`}>
                                {statusConfig.text}
                            </span>
                        </div>
                    </div>
                </div>
                {/* Close button */}
                <button
                    onClick={() => setIsDismissed(true)}
                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <X className="w-4 h-4 text-[#8C94A6]" />
                </button>
            </div>
        </div>
    );
}

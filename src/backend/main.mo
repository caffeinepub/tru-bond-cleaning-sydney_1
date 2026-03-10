import Int "mo:core/Int";
import Array "mo:core/Array";
import List "mo:core/List";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  type Enquiry = {
    name : Text;
    email : Text;
    phone : Text;
    serviceType : Text;
    message : Text;
    timestamp : Int;
  };

  module Enquiry {
    public func compare(enquiry1 : Enquiry, enquiry2 : Enquiry) : Order.Order {
      Int.compare(enquiry1.timestamp, enquiry2.timestamp);
    };
  };

  let adminList = List.empty<Principal>();
  let enquiries = List.empty<Enquiry>();

  public shared ({ caller }) func initializeAdmin(adminPrincipal : Principal) : async () {
    if (enquiries.size() > 0) { Runtime.trap("Cannot change admin after submissions have already started") };
    if (adminList.isEmpty()) {
      adminList.add(adminPrincipal);
    } else {
      Runtime.trap("Admin already initialized");
    };
  };

  public shared ({ caller }) func submitEnquiry(
    name : Text,
    email : Text,
    phone : Text,
    serviceType : Text,
    message : Text,
  ) : async () {
    let newEnquiry : Enquiry = {
      name;
      email;
      phone;
      serviceType;
      message;
      timestamp = 0;
    };
    enquiries.add(newEnquiry);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    if (adminList.isEmpty()) { Runtime.trap("No admin initialized") };
    if (not adminList.contains(caller)) { Runtime.trap("Access denied. Only admin can view all enquiries.") };
    enquiries.toArray().sort();
  };

  public query ({ caller }) func getLatestEnquiries(limit : Nat) : async [Enquiry] {
    if (adminList.isEmpty()) { Runtime.trap("No admin initialized") };
    if (not adminList.contains(caller)) { Runtime.trap("Access denied. Only admin can view enquiries.") };

    let sortedEnquiries = enquiries.toArray();
    let sorted = sortedEnquiries.sort();
    let startIdx = if (sorted.size() > limit) { sorted.size() - limit } else { 0 : Nat };
    sorted.sliceToArray(startIdx, sorted.size());
  };
};

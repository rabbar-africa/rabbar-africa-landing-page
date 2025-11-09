export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
  readingTime: number; // in minutes
  featured: boolean;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "essential-car-maintenance-tips-nigeria",
    title: "Essential Car Maintenance Tips for Nigerian Roads",
    excerpt:
      "Keep your vehicle running smoothly on Nigeria's challenging roads with these expert maintenance tips from Rabbar Africa's experienced technicians.",
    content: `
# Essential Car Maintenance Tips for Nigerian Roads

Nigeria's diverse road conditions, from smooth highways to challenging terrain, require special attention to vehicle maintenance. At Rabbar Africa, we've seen it all, and we're here to share our expertise to keep your vehicle running smoothly.

## 1. Regular Oil Changes Are Crucial

In Nigeria's hot climate and dusty conditions, engine oil degrades faster than in temperate climates. We recommend:

- Change oil every 5,000-7,500 kilometers
- Use high-quality synthetic or semi-synthetic oils
- Check oil levels weekly, especially during long trips

## 2. Air Filter Maintenance

Nigerian roads can be dusty, especially during harmattan season:

- Replace air filters every 10,000-15,000 kilometers
- Clean or inspect filters monthly during dusty seasons
- A clean air filter improves fuel efficiency by up to 10%

## 3. Tire Care for All Seasons

Proper tire maintenance is essential for safety and fuel efficiency:

- Check tire pressure monthly (including spare tire)
- Rotate tires every 10,000 kilometers
- Replace when tread depth reaches 2mm
- Carry a reliable tire gauge and pump

## 4. Cooling System Maintenance

Nigeria's hot climate puts extra stress on cooling systems:

- Check coolant levels regularly
- Flush cooling system annually
- Inspect radiator for debris and damage
- Replace thermostat every 2-3 years

## 5. Battery Care

Heat and humidity affect battery life:

- Clean terminals monthly
- Check electrolyte levels in serviceable batteries
- Replace batteries every 2-3 years
- Keep terminals corrosion-free

## Professional Servicing

While these tips help maintain your vehicle, regular professional servicing is essential. At Rabbar Africa, our certified technicians provide comprehensive maintenance services tailored to Nigerian driving conditions.

Contact us today to schedule your next service appointment!
    `,
    author: "Rabbar Africa Technical Team",
    publishedAt: "2024-11-01T10:00:00Z",
    tags: ["maintenance", "car care", "nigeria", "tips"],
    category: "Maintenance",
    readingTime: 4,
    featured: true,
    seo: {
      metaTitle: "Car Maintenance Tips for Nigerian Roads | Rabbar Africa",
      metaDescription:
        "Expert car maintenance tips for Nigerian road conditions. Keep your vehicle running smoothly with advice from Rabbar Africa's certified technicians.",
      keywords: [
        "car maintenance Nigeria",
        "vehicle care tips",
        "auto maintenance",
        "Nigerian roads",
      ],
    },
  },
  {
    id: "2",
    slug: "complete-guide-car-documentation-nigeria",
    title: "Complete Guide to Car Documentation in Nigeria",
    excerpt:
      "Navigate Nigeria's vehicle documentation requirements with ease. From vehicle registration to insurance, we cover everything you need to know.",
    content: `
# Complete Guide to Car Documentation in Nigeria

Proper vehicle documentation is crucial for legal driving in Nigeria. At Rabbar Africa, we help thousands of customers navigate the complex world of car paperwork. Here's your comprehensive guide.

## Essential Documents Every Car Owner Needs

### 1. Vehicle License (Registration)
- Required for all vehicles on Nigerian roads
- Must be renewed annually
- Shows proof of ownership and roadworthiness

### 2. Driver's License
- Valid Nigerian driver's license required
- International driving permits accepted temporarily
- Must match vehicle class you're driving

### 3. Insurance Certificate
- Third-party insurance is mandatory
- Comprehensive insurance recommended
- Must be current and valid

### 4. Certificate of Road Worthiness
- Annual inspection required
- Ensures vehicle meets safety standards
- Required for license renewal

## How to Register Your Vehicle

### Step 1: Gather Required Documents
- Customs duty payment receipt (for imported vehicles)
- Bill of lading
- Purchase receipt
- Valid identification

### Step 2: Vehicle Inspection
- Present vehicle at designated inspection center
- Pay inspection fees
- Receive inspection certificate

### Step 3: Complete Registration
- Visit Vehicle Inspection Office (VIO)
- Submit all documents
- Pay registration fees
- Receive license plates and certificate

## Common Documentation Challenges

### 1. Lost Documents
- Report to police immediately
- Apply for replacement at issuing authority
- May require sworn affidavit

### 2. Expired Papers
- Renew before expiration to avoid penalties
- Late renewal attracts additional fees
- Some documents require re-inspection

### 3. Transfer of Ownership
- Complete change of ownership forms
- Both parties must be present
- Update all relevant documents

## Tips for Smooth Processing

1. **Keep Copies**: Always maintain photocopies of all documents
2. **Set Reminders**: Track renewal dates to avoid expiration
3. **Use Authorized Agents**: Work with certified documentation services
4. **Verify Requirements**: Check current requirements as they may change

## How Rabbar Africa Can Help

Our documentation services include:
- Vehicle registration assistance
- Insurance processing
- Renewal reminders
- Legal compliance guidance

Don't let paperwork stress you out. Contact Rabbar Africa today for professional documentation services!
    `,
    author: "Rabbar Africa Legal Team",
    publishedAt: "2024-10-28T14:30:00Z",
    tags: ["documentation", "registration", "legal", "paperwork"],
    category: "Documentation",
    readingTime: 6,
    featured: true,
    seo: {
      metaTitle:
        "Car Documentation Guide Nigeria | Vehicle Registration | Rabbar Africa",
      metaDescription:
        "Complete guide to car documentation in Nigeria. Learn about vehicle registration, insurance, and legal requirements with Rabbar Africa.",
      keywords: [
        "car registration Nigeria",
        "vehicle documentation",
        "Nigerian car papers",
        "auto registration",
      ],
    },
  },
  {
    id: "3",
    slug: "signs-your-car-needs-immediate-repair",
    title: "Warning Signs Your Car Needs Immediate Repair",
    excerpt:
      "Don't ignore these critical warning signs. Learn when your vehicle needs urgent attention to prevent costly damage and ensure your safety on the road.",
    content: `
# Warning Signs Your Car Needs Immediate Repair

Your car often gives warning signs before major problems occur. Recognizing these early indicators can save you money and prevent dangerous situations. Our expert technicians at Rabbar Africa have compiled this essential guide.

## Engine-Related Warning Signs

### 1. Strange Noises
- **Knocking sounds**: Possible engine bearing issues
- **Grinding noises**: Often brake-related problems
- **Squealing**: Usually belt or brake issues
- **Clicking**: Potential CV joint problems

### 2. Warning Lights
- **Check Engine Light**: Various engine issues
- **Oil Pressure Light**: Critical - stop immediately
- **Temperature Warning**: Overheating risk
- **Brake Warning Light**: Brake system problems

### 3. Performance Issues
- **Hard starting**: Battery, fuel, or ignition problems
- **Rough idling**: Engine timing or fuel system issues
- **Loss of power**: Multiple potential causes
- **Excessive vibration**: Engine mounts or balance issues

## Safety-Critical Signs

### 1. Brake Problems
- **Soft or spongy pedal**: Brake fluid or system issues
- **Grinding sounds**: Worn brake pads or rotors
- **Vehicle pulls to one side**: Uneven brake wear
- **Warning light activated**: Immediate inspection needed

### 2. Steering Issues
- **Difficulty steering**: Power steering problems
- **Vibration in steering wheel**: Alignment or balance issues
- **Excessive play**: Worn steering components
- **Unusual noises when turning**: Joint or fluid issues

### 3. Tire Problems
- **Uneven wear patterns**: Alignment or suspension issues
- **Bulges or cracks**: Immediate replacement needed
- **Low pressure frequently**: Possible puncture or valve issues
- **Vibration at speed**: Balance or separation problems

## Electrical System Warnings

### 1. Battery and Charging
- **Dim headlights**: Charging system problems
- **Slow engine cranking**: Battery or starter issues
- **Dashboard warnings**: Electrical system faults
- **Corrosion on terminals**: Connection problems

### 2. Lighting Issues
- **Flickering lights**: Electrical connection problems
- **Burnt out bulbs frequently**: Voltage regulator issues
- **Dashboard warning lights**: Various system problems

## When to Stop Driving Immediately

### Critical Situations:
1. **Oil pressure warning light**
2. **Temperature gauge in red zone**
3. **Smoke from engine bay**
4. **Brake pedal goes to floor**
5. **Strong burning smells**
6. **Steam from radiator**

## Preventive Measures

### Regular Maintenance Schedule
- **Weekly**: Check fluids, lights, tires
- **Monthly**: Detailed inspection of belts, hoses
- **Quarterly**: Professional inspection
- **Annually**: Comprehensive service

### What You Can Do
1. **Listen**: Pay attention to unusual sounds
2. **Look**: Watch for warning lights and leaks
3. **Feel**: Notice changes in handling or performance
4. **Smell**: Detect unusual odors

## Professional Help at Rabbar Africa

Our certified technicians use advanced diagnostic equipment to:
- Identify problems early
- Provide accurate repair estimates
- Use genuine parts
- Offer warranty on all work

### Our Services Include:
- Comprehensive vehicle diagnostics
- Engine repair and rebuilding
- Brake system service
- Electrical system repair
- Preventive maintenance programs

Don't wait for small problems to become major expenses. Contact Rabbar Africa at the first sign of trouble. Our expert team is ready to keep you safe on the road!

**Remember**: When in doubt, have it checked out. Your safety is worth more than the cost of an inspection.
    `,
    author: "Chief Mechanic - Rabbar Africa",
    publishedAt: "2024-10-25T09:15:00Z",
    tags: ["repair", "warning signs", "safety", "diagnostics"],
    category: "Repair",
    readingTime: 7,
    featured: false,
    seo: {
      metaTitle:
        "Car Warning Signs - When to Seek Immediate Repair | Rabbar Africa",
      metaDescription:
        "Learn critical warning signs that indicate your car needs immediate repair. Expert advice from Rabbar Africa's certified technicians.",
      keywords: [
        "car warning signs",
        "auto repair",
        "vehicle problems",
        "car maintenance Nigeria",
      ],
    },
  },
  {
    id: "4",
    slug: "choosing-right-engine-oil-nigerian-climate",
    title: "Choosing the Right Engine Oil for Nigerian Climate",
    excerpt:
      "Learn how to select the perfect engine oil for your vehicle in Nigeria's unique climate conditions. Expert recommendations from Rabbar Africa.",
    content: `
# Choosing the Right Engine Oil for Nigerian Climate

Nigeria's tropical climate presents unique challenges for engine lubrication. High temperatures, humidity, and varying road conditions require careful consideration when selecting engine oil. At Rabbar Africa, we help you make the right choice.

## Understanding Nigerian Climate Challenges

### Temperature Extremes
- Consistent high temperatures year-round
- Daily temperature variations
- Hot asphalt affecting engine heat
- Increased oil oxidation rates

### Environmental Factors
- High humidity levels
- Dusty conditions during harmattan
- Frequent stop-and-go traffic
- Extended idle times in traffic jams

## Oil Viscosity Grades for Nigeria

### Recommended Viscosities
- **5W-30**: Ideal for most modern engines
- **10W-40**: Good for older vehicles
- **15W-40**: Suitable for diesel engines
- **0W-20**: For newer fuel-efficient engines

### Why Viscosity Matters
- **Lower first number**: Better cold-start protection
- **Higher second number**: Better high-temperature performance
- **Multi-grade oils**: Adapt to temperature changes

## Types of Engine Oil

### 1. Conventional Oil
- **Pros**: Affordable, widely available
- **Cons**: Breaks down faster in heat
- **Best for**: Older vehicles, basic driving

### 2. High-Mileage Oil
- **Pros**: Contains seal conditioners
- **Cons**: More expensive than conventional
- **Best for**: Vehicles over 120,000 km

### 3. Synthetic Blend
- **Pros**: Better heat resistance than conventional
- **Cons**: Not as advanced as full synthetic
- **Best for**: Moderate driving conditions

### 4. Full Synthetic Oil
- **Pros**: Excellent heat protection, longer intervals
- **Cons**: Most expensive option
- **Best for**: High-performance engines, severe conditions

## Oil Change Intervals in Nigeria

### Standard Recommendations
- **Conventional oil**: 5,000 - 7,500 km
- **Synthetic blend**: 7,500 - 10,000 km
- **Full synthetic**: 10,000 - 15,000 km

### Factors Affecting Intervals
- **Driving conditions**: City vs highway
- **Vehicle age**: Older engines need more frequent changes
- **Oil quality**: Higher quality lasts longer
- **Climate stress**: Heat reduces oil life

## Signs You Need an Oil Change

### Visual Indicators
1. **Dark, thick oil**: Normal oil is amber-colored
2. **Metal particles**: Sign of engine wear
3. **Foamy oil**: Possible coolant leak
4. **Low oil level**: Regular consumption or leaks

### Performance Indicators
1. **Engine noise**: Increased friction sounds
2. **Reduced fuel economy**: Dirty oil creates drag
3. **Exhaust smoke**: Blue smoke indicates oil burning
4. **Warning lights**: Oil pressure or check engine

## Choosing Quality Oil Brands

### International Brands Available in Nigeria
- **Mobil 1**: Excellent synthetic options
- **Shell Helix**: Good all-around performance
- **Castrol GTX**: Reliable conventional and synthetic
- **Total Quartz**: Quality European formulations

### What to Look For
- **API certification**: Meets industry standards
- **ACEA ratings**: European quality standards
- **OEM approvals**: Manufacturer recommendations
- **Fresh date codes**: Avoid old inventory

## Special Considerations for Nigerian Drivers

### Urban Driving
- More frequent oil changes needed
- Synthetic oil recommended
- Monitor oil level weekly
- Consider high-temperature formulations

### Highway Driving
- Standard intervals may apply
- Conventional oil often sufficient
- Check oil before long trips
- Carry extra oil for emergencies

### Extreme Conditions
- Towing or hauling loads
- Frequent off-road driving
- Extended idling periods
- Racing or performance driving

## DIY Oil Change Tips

### Safety First
1. **Warm engine**: Run for 2-3 minutes only
2. **Level ground**: Ensure accurate measurements
3. **Proper disposal**: Recycle used oil responsibly
4. **Quality filter**: Always change with oil

### Step-by-Step Process
1. **Drain old oil**: Remove drain plug carefully
2. **Replace filter**: Use proper wrench
3. **Install drain plug**: Don't overtighten
4. **Add new oil**: Check capacity in manual
5. **Check level**: Run engine, then recheck

## Professional Service at Rabbar Africa

### Our Oil Change Service Includes:
- **Quality oil selection**: Based on your vehicle's needs
- **Genuine filters**: OEM or equivalent quality
- **Multi-point inspection**: Check belts, hoses, fluids
- **Disposal service**: Environmentally responsible
- **Service records**: Track your maintenance history

### Why Choose Professional Service?
- **Expertise**: Trained technicians
- **Equipment**: Proper tools and lifts
- **Quality**: Guaranteed products and service
- **Convenience**: While-you-wait service
- **Warranty**: Protection on parts and labor

## Cost-Saving Tips

### Smart Shopping
1. **Buy in bulk**: Larger containers cost less per liter
2. **Watch for promotions**: Seasonal discounts available
3. **Loyalty programs**: Regular customer benefits
4. **Quality vs price**: Cheaper isn't always better

### Extend Oil Life
1. **Gentle driving**: Avoid aggressive acceleration
2. **Regular maintenance**: Keep engine clean
3. **Quality fuel**: Reduces contamination
4. **Monitor levels**: Top up when needed

Remember, engine oil is the lifeblood of your vehicle. Investing in quality oil and regular changes will extend your engine's life and maintain optimal performance in Nigeria's challenging climate.

Contact Rabbar Africa today for expert oil change service and personalized recommendations for your vehicle!
    `,
    author: "Rabbar Africa Technical Team",
    publishedAt: "2024-10-20T11:45:00Z",
    tags: ["engine oil", "maintenance", "climate", "lubrication"],
    category: "Maintenance",
    readingTime: 8,
    featured: false,
    seo: {
      metaTitle: "Best Engine Oil for Nigerian Climate | Rabbar Africa Guide",
      metaDescription:
        "Expert guide to choosing the right engine oil for Nigeria's tropical climate. Professional recommendations from Rabbar Africa technicians.",
      keywords: [
        "engine oil Nigeria",
        "tropical climate oil",
        "car maintenance Nigeria",
        "oil change",
      ],
    },
  },
  {
    id: "5",
    slug: "vehicle-insurance-guide-nigeria",
    title: "Vehicle Insurance Guide: Everything You Need to Know in Nigeria",
    excerpt:
      "Comprehensive guide to vehicle insurance in Nigeria. Understand your options, legal requirements, and how to choose the best coverage for your needs.",
    content: `
# Vehicle Insurance Guide: Everything You Need to Know in Nigeria

Vehicle insurance is not just a legal requirement in Nigeria—it's your financial protection against unexpected events. At Rabbar Africa, we help our customers understand and obtain the right insurance coverage for their vehicles.

## Types of Vehicle Insurance in Nigeria

### 1. Third Party Insurance (Mandatory)
- **Legal requirement**: All vehicles must have this
- **Coverage**: Damage to other people's property
- **Limitations**: Doesn't cover your own vehicle
- **Cost**: Most affordable option

### 2. Third Party, Fire and Theft
- **Enhanced coverage**: Includes theft and fire damage
- **Your vehicle**: Protected against fire and theft
- **Others**: Still covers third-party damages
- **Balance**: Good protection at reasonable cost

### 3. Comprehensive Insurance
- **Full coverage**: Your vehicle and others
- **Includes**: Accident, fire, theft, flood, vandalism
- **Extras**: Personal accident cover, medical expenses
- **Premium**: Most expensive but best protection

## Legal Requirements

### What the Law Says
- **Motor Vehicle Insurance Act**: Makes third-party insurance mandatory
- **Penalties**: Heavy fines and possible imprisonment
- **Enforcement**: Increasing VIO and police checks
- **Proof required**: Must carry certificate while driving

### Minimum Coverage Amounts
- **Third-party property damage**: ₦1,000,000 minimum
- **Third-party bodily injury**: ₦500,000 per person
- **Death benefits**: ₦2,000,000 per accident
- **Medical expenses**: ₦50,000 per person

## Factors Affecting Insurance Premiums

### Vehicle-Related Factors
- **Make and model**: Luxury cars cost more
- **Age**: Older vehicles may have higher rates
- **Engine size**: Larger engines = higher premiums
- **Security features**: Anti-theft devices reduce costs

### Driver-Related Factors
- **Age**: Younger drivers pay more
- **Experience**: New drivers face higher rates
- **Claims history**: Previous claims affect premiums
- **Location**: Urban areas typically cost more

### Usage Factors
- **Annual mileage**: Higher usage = higher risk
- **Purpose**: Commercial use costs more
- **Parking**: Secure parking reduces premiums
- **Security**: Gated communities often get discounts

## Choosing the Right Insurance Company

### Top Nigerian Insurance Companies
- **AIICO Insurance**
- **AXA Mansard**
- **Cornerstone Insurance**
- **Sovereign Trust Insurance**
- **Niger Insurance**

### What to Look For
1. **Financial stability**: Check company ratings
2. **Claims settlement**: Fast, fair claim processing
3. **Customer service**: Responsive support
4. **Network**: Wide coverage area
5. **Reputation**: Positive customer reviews

## Understanding Your Policy

### Key Terms to Know
- **Premium**: Amount you pay for coverage
- **Deductible**: Amount you pay before insurance kicks in
- **Policy limit**: Maximum amount insurance will pay
- **Excess**: Your portion of any claim
- **Beneficiary**: Who receives death benefits

### What's Typically Covered
- **Collision damage**: Accident repairs
- **Theft**: Vehicle stolen or parts taken
- **Fire damage**: Engine fires, electrical fires
- **Natural disasters**: Floods, storms, earthquakes
- **Vandalism**: Intentional damage by others

### Common Exclusions
- **Wear and tear**: Normal aging and deterioration
- **Mechanical breakdown**: Engine or transmission failure
- **Racing**: Competitive or speed events
- **DUI incidents**: Driving under influence
- **War and terrorism**: Acts of war or terror

## How to File a Claim

### Immediate Steps After an Accident
1. **Ensure safety**: Move to safe location if possible
2. **Call authorities**: Police for serious accidents
3. **Document everything**: Photos, witness information
4. **Exchange information**: Other driver's details
5. **Contact insurance**: Report claim immediately

### Required Documentation
- **Police report**: For accidents involving injuries
- **Photos**: Vehicle damage, accident scene
- **Witness statements**: Contact information
- **Repair estimates**: From certified mechanics
- **Medical reports**: If injuries occurred

### Claims Process Timeline
- **Reporting**: Within 24-48 hours
- **Assessment**: 3-7 days for adjuster visit
- **Estimate**: 5-10 days for damage assessment
- **Settlement**: 14-30 days after approval
- **Payment**: Usually by bank transfer

## Tips for Reducing Insurance Costs

### Legitimate Ways to Save
1. **Shop around**: Compare quotes from multiple companies
2. **Bundle policies**: Combine auto with home insurance
3. **Increase deductible**: Higher excess = lower premiums
4. **Safe driving**: Maintain clean driving record
5. **Security features**: Install anti-theft devices

### Loyalty Benefits
- **No-claim bonus**: Discounts for claim-free years
- **Long-term customer**: Reduced rates for loyalty
- **Multiple vehicles**: Fleet discounts available
- **Referral programs**: Discounts for referring others

## Common Insurance Mistakes to Avoid

### Don't Do This
1. **Underinsure**: Saving on premiums but losing on claims
2. **False information**: Lying on applications voids coverage
3. **Late payments**: Lapsed policies leave you unprotected
4. **Ignoring policy changes**: Read renewal documents carefully
5. **Delaying claims**: Report accidents immediately

### Smart Moves
1. **Read policy carefully**: Understand what's covered
2. **Keep records**: Maintain all insurance documents
3. **Update information**: Notify changes in circumstances
4. **Review annually**: Ensure coverage meets current needs
5. **Use authorized repairers**: Follow insurer guidelines

## Special Considerations

### Commercial Vehicle Insurance
- **Higher premiums**: Business use increases risk
- **Goods in transit**: Additional coverage needed
- **Employee drivers**: Must be covered under policy
- **Public liability**: Enhanced third-party coverage

### Classic/Vintage Cars
- **Agreed value**: Pre-agreed compensation amount
- **Limited use**: Restrictions on annual mileage
- **Specialist insurers**: Companies that understand classics
- **Higher premiums**: Due to replacement difficulty

## How Rabbar Africa Can Help

### Our Insurance Services
- **Policy advice**: Help choose right coverage
- **Claim assistance**: Support during claim process
- **Documentation**: Ensure proper paperwork
- **Renewal reminders**: Never miss renewal dates

### Partnership Benefits
- **Preferred rates**: Negotiated discounts with insurers
- **Fast processing**: Streamlined application process
- **Expert advice**: Years of industry experience
- **One-stop service**: Insurance with other auto services

## Future of Vehicle Insurance in Nigeria

### Emerging Trends
- **Telematics**: Usage-based insurance pricing
- **Digital platforms**: Online policy management
- **Microinsurance**: Short-term coverage options
- **Blockchain**: Improved claim processing

### Regulatory Changes
- **Stricter enforcement**: More VIO checks
- **Higher minimum coverage**: Increased requirements
- **Consumer protection**: Better complaint handling
- **Digital certificates**: Electronic proof of insurance

## Conclusion

Vehicle insurance is essential protection for Nigerian drivers. Whether you choose basic third-party coverage or comprehensive protection, having proper insurance gives you peace of mind and legal compliance.

At Rabbar Africa, we understand that insurance can be complex. Our team is ready to help you navigate the options and find the coverage that best fits your needs and budget.

**Don't drive uninsured.** Contact Rabbar Africa today for expert insurance guidance and competitive quotes from leading Nigerian insurers!

*Remember: The cost of insurance is small compared to the potential cost of being uninsured.*
    `,
    author: "Rabbar Africa Insurance Team",
    publishedAt: "2024-10-15T13:20:00Z",
    tags: ["insurance", "legal", "coverage", "protection"],
    category: "Documentation",
    readingTime: 10,
    featured: false,
    seo: {
      metaTitle: "Complete Vehicle Insurance Guide Nigeria | Rabbar Africa",
      metaDescription:
        "Everything you need to know about vehicle insurance in Nigeria. Types, requirements, and how to choose the best coverage for your car.",
      keywords: [
        "vehicle insurance Nigeria",
        "car insurance guide",
        "auto insurance",
        "third party insurance",
      ],
    },
  },
];

// Helper functions
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedBlogPosts(limit: number = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.featured)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.category === category)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.tags.includes(tag))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        (post.category === currentPost.category ||
          post.tags.some((tag) => currentPost.tags.includes(tag)))
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}

// Generate static paths for dynamic routes
export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

let subjectLine = `Subject Line Of Email`;

let emailMessageBody = `This is where the full body of the email goes, for more of a visual representation of how it would look, here's some more text:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae augue ut turpis commodo faucibus. Suspendisse quis purus id felis viverra iaculis in at nisl. Aenean tristique nibh eget massa vestibulum, eget lacinia lorem gravida. Sed sit amet odio ornare, consequat enim vitae, rutrum erat. Vivamus id condimentum mi. Etiam porttitor urna vitae dui posuere, a congue nibh ullamcorper. Quisque ac consectetur nulla. Sed hendrerit porta dui eget auctor. Donec molestie, nisl at porttitor dictum, arcu mauris dapibus augue, ut aliquam augue leo ut diam. Pellentesque sollicitudin tempor metus eu mattis. Donec bibendum purus augue, et blandit erat hendrerit et. Fusce quis congue nunc, eu tincidunt metus.

Suspendisse vel ultricies ex. Pellentesque malesuada euismod ex, ultricies elementum elit dictum nec. Nulla rutrum vel orci sit amet placerat. Ut sit amet congue libero, sed semper elit. Nunc malesuada quis erat egestas commodo. Fusce sit amet mauris turpis. Suspendisse eu vestibulum augue. Fusce in eleifend lorem. Vestibulum at pulvinar magna. Ut quis arcu felis. Aenean sollicitudin pulvinar mattis. Mauris non ipsum ut risus maximus faucibus. Fusce nec tristique odio.

Pellentesque neque magna, dignissim a consectetur tincidunt, consequat vitae orci. Maecenas cursus purus porta, volutpat diam quis, tempor metus. Nulla dignissim, ex non convallis ullamcorper, elit magna cursus velit, vitae finibus enim urna in nulla. Nunc tincidunt orci nec arcu porta consequat. Pellentesque tempus, libero sit amet ornare sollicitudin, leo dolor vestibulum ex, non egestas nisl mi eu sapien. Pellentesque justo enim, consectetur dapibus pretium at, pretium in libero. In a fringilla mi, sit amet consequat neque.

Vivamus sollicitudin tempus libero at venenatis. Curabitur egestas elementum elit, quis volutpat arcu porta eget. Vivamus ut volutpat diam. Sed eget magna non erat venenatis mattis eget pellentesque odio. Quisque finibus vehicula imperdiet. Curabitur vel sem eget ante gravida consectetur. Aenean pulvinar odio vitae neque finibus, id malesuada elit semper. Duis in fringilla nisl. Integer interdum accumsan scelerisque. Vivamus at nibh aliquam, dictum lectus at, porttitor eros. Duis sollicitudin sapien sed ligula dapibus ornare. Pellentesque vehicula a lacus eget cursus. Donec pulvinar mauris nec scelerisque tincidunt. Etiam magna turpis, placerat vel velit vitae, lobortis tempus ipsum. Donec id pulvinar sem. Sed arcu quam, mattis non lacinia id, sollicitudin et dolor.

Sed et nisl nec tortor auctor consequat in nec orci. Phasellus fringilla, lorem sit amet eleifend efficitur, eros ante consectetur ligula, sit amet tempor metus nisi nec risus. Mauris tempor odio id ante vulputate, ac mattis eros ultricies. Aenean pharetra lacus sapien, ut iaculis eros gravida at. Suspendisse nec accumsan ante, ut euismod mi. Nullam suscipit condimentum nisl, cursus dapibus nisl imperdiet sit amet. Sed at viverra tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel placerat libero. Fusce posuere eros at vulputate vehicula. Pellentesque eu facilisis odio. Curabitur massa arcu, hendrerit lacinia odio et, tristique ullamcorper tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ut facilisis sapien, at laoreet ex.`;

document.getElementById("subject-line").textContent = subjectLine;
document.getElementById("email-message-body").textContent = emailMessageBody;

function normaliseString(str) {
    // Define a mapping of accented letters to their non-accented equivalents
    const charMap = {
        'à': 'a',
        'á': 'a',
        'ä': 'a',
        'é': 'e',
        'è': 'e',
        'ê': 'e',
        'ë': 'e',
        'í': 'i',
        'î': 'i',
        'ï': 'i',
        'ì': 'i',
        'ó': 'o',
        'ô': 'o',
        'ö': 'o',
        'ú': 'u',
        'û': 'u',
        'ü': 'u',
        'ū': 'u',
        'ç': 'c',
        'À': 'A',
        'Á': 'A',
        'Ä': 'A',
        'É': 'E',
        'È': 'E',
        'Ê': 'E',
        'Ë': 'E',
        'Í': 'I',
        'Ì': 'I',
        'Î': 'I',
        'Ï': 'I',
        'Ó': 'O',
        'Ô': 'O',
        'Ö': 'O',
        'Ú': 'U',
        'Û': 'U',
        'Ü': 'U',
        'Ū': 'U',
        'Ç': 'C',
        // Add more mappings as needed
    };

    // Use a regular expression to replace special characters
    return str.replace(/[àáäéèêëíîìïóôöúûüūçÀÁÄÉÈÊËÍÌÎÏÓÔÖÚÛÜŪÇ]/g, match => charMap[match] || match);
}

function sendEmail() {
    // Get user's signature from text area
    let signature = document.getElementById("signature").value;

    // Replace multiple spaces with a single space character, then trim
    signature = signature.replace(/\s+/g, " ").trim();

    // Normalise signature by replacing special characters
    let normalisedSignature = normaliseString(signature);

    // Trim trailing whitespace from emailMessageBody
    let trimmedEmailMessageBody = emailMessageBody.trim();

    // Create encoded mail-to link
    let mailToLink = `mailto:exampleEmail1@email.com,exampleEmail2@email.com?subject=${subjectLine}&body=${encodeURIComponent(trimmedEmailMessageBody + "\n" + normalisedSignature)}`;

    // Open email client with pre-filled email
    window.location.href = mailToLink;
}

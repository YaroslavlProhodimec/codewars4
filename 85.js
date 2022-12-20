function numberOfHooks(length, maxHookDist) {
    return 2 ** Math.ceil(Math.log2(length / Math.min(length, maxHookDist))) + 1;
}